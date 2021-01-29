import express from "express";
import { getUser } from "../controllers";
import validateController from "../controllers/validate.controller";
import validate from "../middlewares/validate";

const router = express.Router();

router.get("/", getUser);
router.post("/validate-rule", validate, validateController);

export default router;
