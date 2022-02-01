import db from "../models";
import TypeCompany from "../types/TypeCompany";
import schemaValidate from "../validationSchema/schemaValidate";
import companySchema from "../validationSchema/companySchema";
import TypeUser from "../types/TypeUser" ;
import TypeDataValidationResponse from "../types/TypeDataValidationResponse";
import {Model} from "sequelize";

const Company = db.company;
const CompanyConnections = db.company_connection;

const createCompany = async (user, companyData: TypeCompany): Promise<[number, number]> => {
    const company = await Company.create(companyData);
    await user.update({company_id: company.id})

    return company
}

const validateCompanyData = (companyData: TypeCompany): TypeDataValidationResponse => {
    try {
        schemaValidate(companySchema, companyData)
        return {isValid: true}
    } catch (err) {
        return {isValid: false, errors: err,}
    }
}


const isLinkedToCompany = (user: TypeUser): boolean => {
    return user.company_id > 0;
}

const getConnections = (user): Promise<Model[]> => {
    const condition = user.company > 0 ? {to_company: user.company} : null;
    return CompanyConnections.findAll({where: condition, include: Company})
}

const getConnectionRequest = (id: number): Promise<Model> => {
    return CompanyConnections.findOne({where: {id}})
}

export {createCompany, validateCompanyData, isLinkedToCompany, getConnections, getConnectionRequest}