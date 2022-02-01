import {Button, FloatingLabel, Form} from "react-bootstrap";
import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";

const UserSearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [email, setEmail] = useState<string>('')


    const handleSearch = async (e) => {
        e.preventDefault();
        if (email.length < 3) {
            alert('minimum email length 3 characters' + email)
            return;
        }

        setSearchParams({email});
    }

    return (
        <Form className="col-12 col-md-6 col-xl3 mx-auto" onSubmit={handleSearch}>
            <Form.Group className="float-start mb-3 col-12 col-md-6 col-lg-8 px-1" controlId="name-label">
                <FloatingLabel controlId="email" label="email">
                    <Form.Control type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </FloatingLabel>
            </Form.Group>

            <div className={'col-12 col-md-6 col-xl-4 float-start'}>
                <Button variant="outline-success" className={'px-5'} type="submit">Search</Button>
            </div>

        </Form>
    )
}

export default UserSearchForm
