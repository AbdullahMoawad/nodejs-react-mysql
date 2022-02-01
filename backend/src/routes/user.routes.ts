import express from "express";
import verify from "./auth/authVerify.ts";
import * as userController from '../controllers/user.controller.ts';
import * as userCompanyController from '../controllers/userCompany.controller.ts';
import makeExpressCallback from "../expressCallback";

const router = express.Router()

router.get('/', verify, makeExpressCallback(userController.findAll));
router.post('/', verify, makeExpressCallback(userController.create));
router.get('/company/employees/search', verify, makeExpressCallback(userController.search));
router.get('/company', verify, userCompanyController.company);

export default router