import express from "express";
import { signup, login } from "../Controller/userController.js";

const userRoute = express.Router();

userRoute.post("/signup", signup);
userRoute.post("/login", login);
export default userRoute;