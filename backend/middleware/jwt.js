import jwt from 'jsonwebtoken';
import { errorHandler } from './errorHandler.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return next(errorHandler(401,"You are not authenticated!"))
    
    jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
        if (err) return next(errorHandler(403,"Not valid token"))
        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        next();
    });
};
