import {Button, FloatingLabel, Form} from "react-bootstrap";
import React, {useState} from "react";
import Validation from "../schemaValidation/Validation";
import companySearchSchema from "../schemaValidation/companySearchSchema";
import InputFeedback from "./inputFeedback";
import {useSearchParams} from "react-router-dom";

const CompanySearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [searchData, setSearchData] = useState({
        name: searchParams.get('name') || '',
        industry: searchParams.get('industry') || '',
        size: searchParams.get('size') || '',
    })

    const {errors=[], setErrors, validate}= Validation(companySearchSchema)

    const handleSearch = async (e) => {
        e.preventDefault();
        await setErrors([])

        await validate(searchData).then(async data => {
            if (data && Object.keys(data).length > 0) return;

            setSearchParams(searchData);
        })
    }

    return (
        <Form className="col-12 float-start" onSubmit={handleSearch}>
            <Form.Group className="float-start mb-3 col-12 col-md-4 px-1" controlId="name-label">
                <FloatingLabel controlId="name" label="Name">
                    <Form.Control type="text" placeholder="name"
                                  className={`${errors['name'] ? 'is-invalid' : ''}`}
                                  value={searchData.name}
                                  onChange={e => setSearchData({...searchData, name: e.target.value})}
                    />

                    <InputFeedback msg={errors['name']}/>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="float-start mb-3 col-12 col-md-4 px-1" controlId="industry-label">
                <FloatingLabel controlId="Industry" label="Industry">
                    <Form.Control type="text" placeholder="Industry"
                                  className={`${errors['industry'] ? 'is-invalid' : ''}`}
                                  value={searchData.industry}
                                  onChange={e => setSearchData({...searchData, industry: e.target.value})}
                    />

                    <InputFeedback msg={errors['industry']}/>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="float-start mb-3 col-12 col-md-4 px-1" controlId="size-label">
                <FloatingLabel controlId="size" label="Size">
                    <Form.Control type="number" placeholder="size"
                                  className={`${errors['size'] ? 'is-invalid' : ''}`}
                                  value={searchData.size}
                                  onChange={e => setSearchData({...searchData, size: e.target.value})}
                    />

                    <InputFeedback msg={errors['size']}/>
                </FloatingLabel>
            </Form.Group>

            <div className={'w-75 mx-auto float-none text-center'}>
                <Button variant="outline-success" className={'px-5'} type="submit">Search</Button>
            </div>

        </Form>
    )
}

export default CompanySearchForm
