import {Router} from "express";

const authRouter  = Router();

authRouter.get("/", (req, res) => {})
authRouter.post("/login", (req, res) => {})
authRouter.post("/register", (req, res) => {})
authRouter.post("/logout", (req, res) => {})

export default authRouter;