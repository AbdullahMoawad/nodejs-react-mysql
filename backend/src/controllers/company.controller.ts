import TypeServiceRequest from "../types/TypeServiceRequest";
import {companySearch, getAllCompanies} from "../services/company.service";
import db from "../models";

const CompanyConnection = db.company_connection;

const findAll = async (req): Promise<TypeServiceRequest> => {
    const {company_id} = req.user
    try {
        const condition = {
            include: {
                model: CompanyConnection,
                required:false,
                where: {
                    from_company: company_id
                }
            }
        }

        const companies = await getAllCompanies(condition)
        return companies ? {body: companies, statusCode: 200} : {body: 'companies not found', statusCode: 404}
    } catch (err) {
        console.log(err)
        return {body: err?.message??'something went wrong', statusCode: 500}
    }
};

const search = async (req): Promise<TypeServiceRequest> => {
    const fields = ['name', 'industry', 'size']
    const searchData = Object.entries(req.query).filter(([key, value]) => fields.includes(key))

    try {
        const companies = await companySearch(searchData)
        return companies ? {body: companies, statusCode: 200} : {body: 'companies not found', statusCode: 404}
    } catch (err) {
        console.log(err)
        return {body: err?.message??'something went wrong', statusCode: 500}
    }
};

export {findAll, search};
