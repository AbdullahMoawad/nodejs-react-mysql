import db from "../models";
import TypeServiceRequest from "../types/TypeServiceRequest";
import {Op} from "sequelize";
import TypeCompany from "../types/TypeCompany";

const Company = db.company;

const getCompany = (id: number) => {
    return Company.findOne({where: {id}})
}

const getAllCompanies = (condition:{}|null=null) => {
    return Company.findAll(condition)
}

const companySearch = (searchData: [...TypeCompany]): Promise<TypeServiceRequest> => {

    return Company.findAll({
        where: {
            [Op.and]: [
                searchData.map(([key, value]) => value ? {[key]: {[Op.like]: `%${value}%`}} : null)
            ]
        }
    })
}
export {getCompany, companySearch, getAllCompanies}