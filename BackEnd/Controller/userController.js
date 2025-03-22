import User from "../model/userModel.js";
import bcryptjs from "bcryptjs"

export const signup= async (req,res)=>{
    try{
        const{ fullname, email, password } = req.body;
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"user already present",
            })
        }
        const hashPassword = await bcryptjs.hash(password,10)
        const createUser = new User({
            fullname : fullname,
            email: email,
            password: hashPassword
        })
        await createUser.save();
        res.status(201).json({
            message: "user created successfully",
            user:{
                _id: createUser._id,
                fullname: createUser.fullname,
                email: createUser.email,
            }

        })
    }catch (error){
        console.log("error :", error);
        res.status(500).json({
            message:"internal error"
        })
    }
}

export const login = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const ismatch = await bcryptjs.compare(password, user.password);
        if(user && ismatch){
            res.status(200).json({
                message:"login successful",
                user:{
                    id:user.id,
                    fullname:user.fullname,
                    email:user.email,
                }
            })
        }
        else{
            return res.status(400).json({
                message:"invalid username or password",
            })
        }
    }
    catch(error){
        console.log("error:", error);
        res.status(500).json({message:"internal error"});
    }
}