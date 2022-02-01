import TypeCompany from "./TypeCompany";

export default interface TypeCompanyConnection {
    id: number
    from_company: number
    to_company: string
    status: string
    company: TypeCompany
}