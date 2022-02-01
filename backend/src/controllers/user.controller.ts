import {getUserCompany, isLinkedToCompany} from "../services/userCompany.service";
import TypeUser from "../types/TypeUser";
import TypeServiceRequest from "../types/TypeServiceRequest";
import {createUser, getAllUsers, usersSearch, validateUserData} from "../services/user.service";
import TypeDataValidationResponse from "../types/TypeDataValidationResponse";
import {getCompany} from "../services/company.service";

const create = async (req): Promise<TypeServiceRequest> => {
    const user = req.user;
    const {first_name, last_name, email, password}: TypeUser = req.body
    const newUserData: TypeUser | any = {first_name, last_name, email, company: user.company_id, password, status: true};

    const validateUser: TypeDataValidationResponse = validateUserData(newUserData)
    if (!validateUser.isValid) return {body: validateUser.errors, statusCode: 400};

    try {
        const existUserCompany = await getCompany(user.company_id)
        if (!existUserCompany) return {body: "add company fist, then add employee", statusCode: 404};

        const newUser = await createUser(newUserData)
        return newUser ? {body: newUser, statusCode: 200} : {body: 'action failed', statusCode: 500}
    } catch (err) {
        console.log(err)
        return {body: err?.message??'something went wrong', statusCode: 500}
    }
};

const findAll = async (req): Promise<TypeServiceRequest> => {
    const user = req.user;

    if (!isLinkedToCompany(user)) return {body: "add company fist, then add employee", statusCode: 404};

    try {
        const users = await getAllUsers(user.company_id)
        return users ? {body: users, statusCode: 200} : {body: 'no data found', statusCode: 404}
    } catch (err) {
        console.log(err)
        return {body: err?.message??'something went wrong', statusCode: 500}
    }
};


const search = async (req): Promise<TypeServiceRequest> => {
    const fields = ['email']
    const searchData = Object.entries(req.query).filter(([key, value]) => fields.includes(key))

    try {
        const search = await usersSearch(searchData)
        return search ? {body: search, statusCode: 200} : {body: 'no data found', statusCode: 404}
    } catch (err) {
        console.log(err)
        return {body: err?.message??'something went wrong', statusCode: 500}
    }
};

export {findAll, create, search}