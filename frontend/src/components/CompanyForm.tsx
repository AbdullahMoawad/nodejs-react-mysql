import {Button, FloatingLabel, Form} from "react-bootstrap";
import React, {useState} from "react";
import Validation from "../schemaValidation/Validation";
import companySchema from "../schemaValidation/companySchema";
import InputFeedback from "./inputFeedback";
import TypeCompany from "../types/TypeCompany";
import userCompanyCreate from "../api/userCompanyCreate";

const CompanyForm = () => {

    const [companyData, setCompanyData] = useState<TypeCompany>({
        name: 'mahmoud@fruitfulday.comx',
        industry: 'mahmoud@fruitfulday.comx',
        size: '0',
    })

    const {errors = [], setErrors, validate} = Validation(companySchema)

    const handleSubmit = async (e) => {
        e.preventDefault();
        await setErrors([])

        await validate(companyData).then(async data => {

            if (data && Object.keys(data).length > 0) return;

            try {
                const apiCall: any = await userCompanyCreate(companyData)

                if (apiCall.status === 200) alert('your company has been create');
                if (apiCall.status !== 200) alert(apiCall?.response?.data);

            } catch (e) {
                console.log(e)
            }
        })

    }

    return (
        <Form className="col-12 float-start" onSubmit={handleSubmit}>
            <Form.Group className="float-start mb-3 col-12 col-md-6 pe-2" controlId="first-name-label">
                <FloatingLabel controlId="first-name" label="Company name">
                    <Form.Control type="text" placeholder="Company name" className={`${errors['name'] ? 'is-invalid' : ''}`}
                                  value={companyData.name}
                                  onChange={e => setCompanyData({...companyData, name: e.target.value})}
                    />

                    <InputFeedback msg={errors['name']}/>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="float-start mb-3 col-12 col-md-6 ps-2" controlId="last-name-label">
                <FloatingLabel controlId="last-name" label="Industry">
                    <Form.Control type="text" placeholder="Industry" className={`${errors['industry'] ? 'is-invalid' : ''}`}
                                  value={companyData.industry}
                                  onChange={e => setCompanyData({...companyData, industry: e.target.value})}
                    />

                    <InputFeedback msg={errors['industry']}/>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="float-start mb-3 col-12" controlId="size-label">
                <FloatingLabel controlId="size" label="Size">
                    <Form.Control type="number" placeholder="size" className={`${errors['size'] ? 'is-invalid' : ''}`}
                                  value={companyData.size}
                                  onChange={e => setCompanyData({...companyData, size: e.target.value})}
                    />

                    <InputFeedback msg={errors['size']}/>
                </FloatingLabel>
            </Form.Group>

            <div className={'w-75 mx-auto float-none text-center'}>
                <Button variant="outline-success" className={'px-5'} type="submit">Submit</Button>
            </div>

        </Form>
    )
}

export default CompanyForm
