import express from "express";
const router = express.Router();

import AuthController from "../../controllers/Auth.controller";

router.get("/register", AuthController.register);
router.get("/body", AuthController.register);

export default router;
