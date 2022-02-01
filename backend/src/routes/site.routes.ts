import express from "express";
import {login} from "../controllers/login.controller.ts";
import {signup} from "../controllers/signup.controller.ts";
import makeExpressCallback from "../expressCallback";

const router = express.Router()

router.post('/login', makeExpressCallback(login));
router.post('/signup', makeExpressCallback(signup));

export default router