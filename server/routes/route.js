import express from "express";
const router = express.Router();

import { userSignup, userLogin } from "../controller/userAuthentication.js";

router.post("/register", userSignup);
router.post("/login", userLogin);

export default router;
