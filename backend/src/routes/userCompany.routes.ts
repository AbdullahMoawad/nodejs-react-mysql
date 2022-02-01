import express from "express";
import verify from "./auth/authVerify.ts";
import * as userController from '../controllers/user.controller.ts';
import * as userCompanyController from '../controllers/userCompany.controller.ts';
import makeExpressCallback from "../expressCallback";

const router = express.Router()

router.get('/get', verify, makeExpressCallback(userCompanyController.company));
router.post('/create', verify, makeExpressCallback(userCompanyController.create));
router.get('/connections', verify, makeExpressCallback(userCompanyController.connections));
router.post('/connection-request', verify, makeExpressCallback(userCompanyController.connectionRequest));
router.put('/connection-request-update', verify, makeExpressCallback(userCompanyController.connectionRequestUpdate));

export default router