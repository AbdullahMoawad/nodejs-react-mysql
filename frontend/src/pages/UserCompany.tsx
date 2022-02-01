import CompanyBox from "../components/CompanyBox";
import userCompanyGet from "../api/userCompanyGet";
import {useEffect, useState} from "react";
import TypeCompany from "../types/TypeCompany";
import CompanyForm from "../components/CompanyForm";
import {Alert} from "react-bootstrap";
import UserCompanyConnections from "../components/UserCompanyConnections";
import TypeCompanyConnection from "../types/TypeCompanyConnection";
import userCompanyConnectionsGet from "../api/userCompanyConnectionsGet";

const UserCompany = () => {
    const [company, setCompany] = useState<TypeCompany>();
    const [companyConnections, setCompanyConnections] = useState<TypeCompanyConnection[]>();

    const getCompany = async () => {
        try {
            const apiCall = await userCompanyGet()
            if (apiCall?.status === 200) setCompany(apiCall?.data);

        } catch (e) {
            console.log(e)
        }
    }
    const getConnections = async () => {
        const apiCall = await userCompanyConnectionsGet();
        if (apiCall?.status === 200) setCompanyConnections(apiCall?.data);
    }

    useEffect(() => {
        getCompany()
        getConnections()
    }, [])

    return (
        <div className={'container'}>
            <h1 className={'float-start w-100 text-center'}>User Company</h1>
            <div className={'float-start w-100 my-5'}>
                {company && (
                    <>
                        <div className={'float-start w-100 mb-5'}>
                            <CompanyBox company={company}/>
                        </div>
                        <div className={'float-start w-100'}>
                            <UserCompanyConnections/>
                        </div>
                    </>
                )}
                {!company && (
                    <>
                        <div className={'float-start w-100 my-4'}>
                            <Alert>You don't have any company linked to your account, please create one.</Alert>
                        </div>
                        <CompanyForm/>
                    </>
                )}
            </div>
        </div>
    )
}

export default UserCompany