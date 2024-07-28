import { errorHandler } from "../middleware/errorHandler.js";
import User from "../models/user.model.js";


export const deleteUser = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('User not found');
        if (userId != req.params.id) return next(errorHandler(401,"You can delete only your account!"))
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send('User has been deleted');
    } catch (error) {
        next(error)
    }
};
