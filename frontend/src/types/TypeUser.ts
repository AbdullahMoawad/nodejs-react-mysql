import TypeCompany from "./TypeCompany";

export default interface TypeUser {
    id: number
    first_name: string
    last_name: string
    email: string
    company_id: number
    company: TypeCompany
    status: boolean
}