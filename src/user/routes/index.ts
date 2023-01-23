import { Router } from "express";
import { CreateAccountController } from "../controller/create-account";
const userRoutes = Router();

userRoutes.post("/signUp", CreateAccountController.execute);

export { userRoutes };
