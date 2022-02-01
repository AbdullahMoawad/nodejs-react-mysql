import db from "../models";
import {TypeCompanyConnectionStatus} from "../types/TypeCompanyConnectionStatus";

const CompanyConnection = db.company_connection;

const requestConnection = async (from_company: number, to_company: number) => {
    const previousRequests = await getPreviousRequests(from_company, to_company)

    if (previousRequests.length > 0) {
        throw new Error('connection already requested before to this company')
    }

    return CompanyConnection.create({from_company, to_company});
}

const updateRequest = (connection, status: TypeCompanyConnectionStatus) => {
    return connection.update({status})
}

const getPreviousRequests = (from_company: number, to_company: number) => {
    return CompanyConnection.findAll({where: {from_company, to_company}})
}

export {requestConnection, updateRequest, getPreviousRequests}