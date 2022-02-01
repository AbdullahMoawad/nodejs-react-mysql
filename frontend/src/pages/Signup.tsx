import {Card} from "react-bootstrap";
import SignupForm from "../components/SignupForm";

const Signup = () => {

    return (
        <div className={'float-start w-100 '}>
            <Card className={'position-absolute top-50 start-50 translate-middle'}>
                <Card.Header>Signup</Card.Header>
                <Card.Body>
                    <SignupForm/>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Signup