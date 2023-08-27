import e from "express";
import * as UserService from '../services/userService.js';

const userRouter = e.Router();

userRouter.get('/', UserService.getUsers);
userRouter.post('/post',UserService.addProduct);
userRouter.put('/update/:id',UserService.updateProduct);
userRouter.delete('/delete/:id',UserService.deleteProduct);
export default userRouter;