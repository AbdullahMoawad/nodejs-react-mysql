import {createCompany, getConnectionRequest, getConnections, isLinkedToCompany, validateCompanyData} from "../services/userCompany.service";
import {getCompany} from "../services/company.service";
import {requestConnection, updateRequest} from "../services/companyConnection.service";
import TypeServiceRequest from "../types/TypeServiceRequest";
import TypeDataValidationResponse from "../types/TypeDataValidationResponse";

const create = async (req): Promise<TypeServiceRequest> => {
    const user = req.user;
    const {name, size, industry, status = true} = req.body

    if (isLinkedToCompany(user)) return {body: 'you are already linked to a company', statusCode: 500};

    try {
        const validateCompany: TypeDataValidationResponse = validateCompanyData({name, size, industry, status})
        if (!validateCompany.isValid) return {body: validateCompany.errors, statusCode: 400};

        const userCompany = await createCompany(user, {name, size, industry, status})

        return userCompany ? {body: userCompany, statusCode: 200} : {body: 'failed to create company', statusCode: 500}
    } catch (err) {
        console.log(err)
        return {body: err?.message ?? 'something went wrong', statusCode: 500}
    }
}

const company = async (req): Promise<TypeServiceRequest> => {
    const user = req.user;

    if (!isLinkedToCompany(user)) return {body: 'you are not linked to a company', statusCode: 500};

    try {
        const userCompany = await getCompany(user.company_id)
        return userCompany ? {body: userCompany, statusCode: 200} : {body: 'company not found', statusCode: 404}
    } catch (err) {
        console.log(err)
        return {body: err?.message ?? 'something went wrong', statusCode: 500}
    }
};

const connections = async (req): Promise<TypeServiceRequest> => {
    const user = req.user;
    const connections = await getConnections(user)

    return connections ? {body: connections, statusCode: 200} : {body: 'no connection found', statusCode: 404}
}

const connectionRequest = async (req): Promise<TypeServiceRequest> => {
    const user = req.user;
    const {to_company} = req.body

    if (!to_company) return {body: "bad request", statusCode: 400};
    if (to_company === user.company_id) return {body: "company cannot connect to itself", statusCode: 400};
    if (!isLinkedToCompany(user)) return {body: 'you are not linked to company', statusCode: 404};

    try {
        const userCompany = await getCompany(to_company)

        if (!userCompany) return {body: 'unable to find targeted company', statusCode: 404};

        const request = await requestConnection(user.company_id, to_company)

        return request ? {body: request, statusCode: 200} : {body: 'action failed', statusCode: 500};

    } catch (err) {
        console.log(err)
        return {body: err?.message ?? 'something went wrong', statusCode: 500}
    }
}

const connectionRequestUpdate = async (req): Promise<TypeServiceRequest> => {
    const user = req.user;
    const {status, id} = req.body

    if (!status || !id) return {body: "bad request", statusCode: 400};

    if (!isLinkedToCompany(user)) return {body: 'you are not linked to company', statusCode: 404};

    try {
        const company = await getCompany(user.company_id)
        if (!company) return {body: 'unable to find your company', statusCode: 404};

        const connection = await getConnectionRequest(id);
        if (!company) return {body: 'unable to find the connection request', statusCode: 404};

        const updatedRequest = await updateRequest(connection, status)

        return updatedRequest ? {body: updatedRequest, statusCode: 200} : {body: 'action failed', statusCode: 500};

    } catch (err) {
        console.log(err)
        return {body: err?.message ?? 'something went wrong', statusCode: 500}
    }
}

export {company, connections, connectionRequest, connectionRequestUpdate, create};
