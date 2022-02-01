import {Card} from "react-bootstrap";
import UsersForm from "../components/UsersForm";

const UserCreate = () => {

    return (
        <div className={'float-start w-100 '}>
            <Card className={'position-absolute top-50 start-50 translate-middle'}>
                <Card.Header>Add User</Card.Header>
                <Card.Body>
                    <UsersForm/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCreate