import userCompanyConnectionsGet from "../api/userCompanyConnectionsGet";
import {useEffect, useState} from "react";
import {Alert, Button, Card, Tab, Tabs} from "react-bootstrap";
import userCompanyConnectionRequestUpdate from "../api/userCompanyConnectionUpdate";
import {TypeCompanyConnectionStatus} from "../types/TypeCompanyConnectionStatus";

const UserCompanyConnections = () => {

    const [connections, setConnections] = useState<any>();

    const getConnections = async () => {
        try {
            const apiCall = await userCompanyConnectionsGet()
            if (apiCall.status === 200) {
                let pending: any = apiCall.data.filter(connection => connection.status === 'pending');
                let accepted: any = apiCall.data.filter(connection => connection.status === 'accepted');
                let rejected: any = apiCall.data.filter(connection => connection.status === 'rejected');

                setConnections({pending, accepted, rejected,})
            }
            if (apiCall.status !== 200) console.log('getConnections failed');
        } catch (e) {
            console.log(e)
        }
    }

    const updateRequest = async (status: TypeCompanyConnectionStatus, id: number) => {
        try {
            const apiCall: any = userCompanyConnectionRequestUpdate(status, id)

            if (apiCall?.status === 200) alert('action success')
            if (apiCall?.status !== 200) alert(apiCall?.response?.data);
        } catch (e) {

        }
    }

    useEffect(() => {
        getConnections()
    }, [])

    return (
        <Tabs defaultActiveKey="pending" className="mb-3">
            <Tab eventKey="pending" title="pending">

                {connections?.pending?.length === 0 && <Alert>No pending requests</Alert>}

                {connections?.pending?.length > 0 && connections.pending.map(connection => (
                    <div key={connection.id}>
                        <Card>
                            <Card.Header className={'fs-3 col-12 float-start'}>
                                {connection.company.name}
                            </Card.Header>
                            <Card.Body className={'text-start text-secondary'}>
                                <div className={'fs-5 col-12 float-start'}>Industry: {connection.company.industry}</div>
                                <div className={'fs-5 col-12 float-start'}>Size: {connection.company.size}</div>
                                <div className={'fs-5 col-12 float-start'}>status: {connection.status}</div>
                                <div className={'float-start w-100 mt-3 text-end'}>
                                    <Button className={'mx-1'} onClick={() => updateRequest('accepted', connection.id)}>Accept</Button>
                                    <Button className={'mx-1'} onClick={() => updateRequest('rejected', connection.id)}>Reject</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Tab><Tab eventKey="rejected" title="rejected">

            {connections?.rejected?.length === 0 && <Alert>No rejected requests</Alert>}

            {connections?.rejected?.length > 0 && connections.rejected.map(connection => (
                <div key={connection.id}>
                    <Card>
                        <Card.Header className={'fs-3 col-12 float-start'}>
                            {connection.company.name}
                        </Card.Header>
                        <Card.Body className={'text-start text-secondary'}>
                            <div className={'fs-5 col-12 float-start'}>Industry: {connection.company.industry}</div>
                            <div className={'fs-5 col-12 float-start'}>Size: {connection.company.size}</div>
                            <div className={'fs-5 col-12 float-start'}>status: {connection.status}</div>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Tab>

            <Tab eventKey="accepted" title="accepted">
                {connections?.accepted?.length === 0 && <Alert>No active connections</Alert>}

                {connections?.accepted?.length > 0 && connections.accepted.map(connection => (
                    <div key={connection.id}>
                        <Card>
                            <Card.Header className={'fs-2 col-12 float-start'}>
                                {connection.company.name}
                            </Card.Header>
                            <Card.Body className={'text-start text-secondary'}>
                                <div className={'fs-5 col-12 float-start'}>Industry: {connection.company.industry}</div>
                                <div className={'fs-5 col-12 float-start'}>Size: {connection.company.size}</div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Tab>
        </Tabs>
    )
}

export default UserCompanyConnections