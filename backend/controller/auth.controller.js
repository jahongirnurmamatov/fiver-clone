import bcrypt from 'bcrypt';
import User  from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../middleware/errorHandler.js';
export const logout =async(req,res)=>{
    
}
export const register =async(req,res,next)=>{
    try {
        const hash=bcrypt.hashSync(req.body.password,5);
        const newUser = new User({
            ...req.body,
            password:hash,
        });
        await newUser.save();
        res.status(201).send('User has been created!');
    } catch (error) {
        next(error)
    }
}
export const login =async(req,res,next)=>{
    try {
        const user = await User.findOne({ username: req.body.username });
        if(!user) return next(errorHandler(404,'User not found!'));
        const isCorrect = bcrypt.compare(req.body.password, user.password);

        console.log(isCorrect)
        if(!isCorrect) return next(errorHandler(403,"Invalid credentials"));
        const token = jwt.sign({
            id:user._id,
            isSeller: user.isSeller
        }, process.env.JWT_KEY);
        const {password, ...info} = user._doc;
        res.cookie('accessToken',token,{
            httpOnly:true
        }).status(200).send(info);
    } catch (error) {
        console.log(error)
        res.status(500).send('something went wrong!');
    }
}