import {Card} from "react-bootstrap";
import CompanyForm from "../components/CompanyForm";

const CompanyCreate = () => {

    return (
        <div className={'float-start w-100 '}>
            <Card className={'position-absolute top-50 start-50 translate-middle'}>
                <Card.Header>Company Create</Card.Header>
                <Card.Body>
                    <CompanyForm/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CompanyCreate