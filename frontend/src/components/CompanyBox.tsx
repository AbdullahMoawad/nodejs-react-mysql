import {Button, Card} from "react-bootstrap";
import TypeCompany from "../types/TypeCompany";
import CompanyConnectButton from "./CompanyConnectButton";

const CompanyBox = ({company}: { company: TypeCompany }) => (
    <Card>
        <Card.Header className={'fs-2 col-12 float-start'}>
            {company.name}
        </Card.Header>
        <Card.Body className={'text-start text-secondary'}>
            <div className={'fs-5 col-12 float-start'}>Industry: {company.industry}</div>
            <div className={'fs-5 col-12 float-start'}>Size: {company.size}</div>
            <div className={'float-start w-100 mt-3 text-end'}>
                <CompanyConnectButton company={company}/>
            </div>
        </Card.Body>
    </Card>
)


export default CompanyBox