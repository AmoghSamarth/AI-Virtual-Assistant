import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signUp= async (req,res)=>{
    try {
        const {name,email,password}=req.body

        const existsEmail = await User.findOne({email})
        if(existsEmail){
            return res.status(400).json({message:"Email already exist !!"})
        }

        if(password.length<6){
            return res.status(400).json({message:"Password must be 6 to 15 characters"})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            name,password:hashedPassword,email
        })
        
    } catch (error) {
        
    }
}