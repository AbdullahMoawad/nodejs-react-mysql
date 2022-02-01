import schemaValidate from "../validationSchema/schemaValidate";
import userSchema from "../validationSchema/userSchema";
import TypeUser from "../types/TypeUser";
import db from "../models";
import {Op} from "sequelize";
import {Model} from "sequelize/types";
import TypeDataValidationResponse from "../types/TypeDataValidationResponse";

const User = db.user;

const createUser = (userData: TypeUser): Promise<Model> => {
    return User.create(userData);
}

const validateUserData = (userData: TypeUser): TypeDataValidationResponse => {
    try {
        schemaValidate(userSchema, userData)
        return {isValid: true}
    } catch (err) {
        return {isValid: false, errors: err,}
    }
}

const getAllUsers = (userCompany: number): Promise<Model[]> => {
    return User.findAll({where: {company_id: userCompany}})
}

const usersSearch = (searchData: [...TypeUser]): Promise<Model[]> => {
    return User.findAll({
        where: {
            [Op.and]: [
                searchData.map(([key, value]) => value ? {[key]: {[Op.like]: `%${value}%`}} : null)
            ]
        }
    });
}

const getUserByEmail = (email: string): Promise<TypeUser> => {
    return User.findOne({where: {email}});
}

export {createUser, validateUserData, getAllUsers, usersSearch, getUserByEmail}