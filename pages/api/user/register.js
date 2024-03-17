import connectDb from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";

export default async function handler(req, res) {
    if(req.method === "POST"){
        connectDb()
        const {name,email,password} = req.body;
        if(!name||!email||!password){
            return res.status(400).json({message:"All fields are mandatory"})
        }
        const emailExist = await User.findOne({email});
        if(emailExist){
            return res.status(400).json({message:"Email already Registered"});    
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({
            name,
            email,
            password:hashedPassword,
        });
        const result = await newUser.save();
        const token = jwt.sign({token:result._id},"CODE_AJ",{expiresIn:"30d"});
        return res.status(201).json({message:"New User Registered Successfully",token});
    }
  }
  