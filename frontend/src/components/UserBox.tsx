import {Button, Card} from "react-bootstrap";
import TypeCompany from "../types/TypeCompany";
import CompanyConnectButton from "./CompanyConnectButton";
import TypeUser from "../types/TypeUser";

const UserBox = ({user}: { user: TypeUser }) => {

    return (
        <Card>
            <Card.Body className={'text-start text-secondary'}>
                <div className={'fs-5 col-12 float-start'}>
                    {user.first_name + " " + user.last_name}
                </div>
                <div className={'fs-5 col-12 float-start'}>
                    {user.email}
                </div>
            </Card.Body>
        </Card>
    )
}

export default UserBox