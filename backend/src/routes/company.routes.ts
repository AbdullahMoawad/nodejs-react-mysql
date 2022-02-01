import express from "express";
import * as companyController from '../controllers/company.controller.ts';

import verify from "./auth/authVerify";
import makeExpressCallback from "../expressCallback";

const router = express.Router()

router.get('/', verify, makeExpressCallback(companyController.findAll));
router.get('/search', verify, makeExpressCallback(companyController.search));

export default router