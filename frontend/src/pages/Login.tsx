import {Card} from "react-bootstrap";
import LoginForm from "../components/LoginForm";

const Login = () => {

    return (
        <div className={'float-start w-100 '}>
            <Card className={'position-absolute top-50 start-50 translate-middle'}>
                <Card.Header>Login</Card.Header>
                <Card.Body >
                    <LoginForm/>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Login