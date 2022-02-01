import TypeCompanyConnection from "./TypeCompanyConnection";

export default interface TypeCompany {
    id?: number
    name: string
    industry: string
    size: string
    status?: boolean
    company_connections?:TypeCompanyConnection[]
}