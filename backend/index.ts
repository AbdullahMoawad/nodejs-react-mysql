import express from "express";
import cors from "cors";
import {config} from "dotenv";
import db from "./src/models/index.ts";
import bodyParser from "body-parser";

import companyRoutes from './src/routes/company.routes';
import siteRoutes from './src/routes/site.routes';
import userRoutes from './src/routes/user.routes';
import userCompanyRoutes from './src/routes/userCompany.routes';

config();

const app = express();
db.sequelize.sync();

app.use(cors({origin: process.env.CORS_ORIGIN}));
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//router
app.use('/api/user', userRoutes)
app.use('/api/company', companyRoutes)
app.use('/api/user/company', userCompanyRoutes)
app.use('/api', siteRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});