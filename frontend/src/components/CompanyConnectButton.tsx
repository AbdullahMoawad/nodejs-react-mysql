import TypeCompany from "../types/TypeCompany";
import {Button} from "react-bootstrap";
import userCompanyConnectionRequest from "../api/userCompanyConnectionRequest";

const CompanyConnectButton = ({company}: { company: TypeCompany }) => {

    const connections = company.company_connections ?? [];
    const userCompany = localStorage.getItem('userCompany') ?? null

    const connectionRequest = async () => {
        try {
            if (!company?.id) return;

            const apiCall: any = await userCompanyConnectionRequest(company.id)
            if (apiCall.status === 200) alert('done, connection status ' + apiCall?.data?.status);
            if (apiCall.status !== 200) alert(apiCall?.response?.data);
        } catch (e: any) {
            console.log(e)
            alert('action failed')
        }
    }

    const hasConnectionRequests: boolean = Object.entries(connections).length > 0
    const isUserCompany: boolean = !!(userCompany && +userCompany === company.id)
    const canConnect = !hasConnectionRequests && !isUserCompany

    return (
        <>
            {hasConnectionRequests && connections[0]?.status !== 'accepted' && <Button>{connections[0]?.status}</Button>}
            {canConnect && <Button onClick={connectionRequest}>Connect</Button>}
        </>
    )
}

export default CompanyConnectButton