import {Alert, Button, FloatingLabel, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import UserCreate from "../api/userCreate";
import Validation from "../schemaValidation/Validation";
import signupSchema from "../schemaValidation/signupSchema";
import InputFeedback from "./inputFeedback";
import TypeSignupData from "../types/TypeSignupData";
import {AxiosError, AxiosResponse} from "axios";

const UserForm = () => {

    const [userCreateInputs, setSignupInputs] = useState<TypeSignupData>({
        first_name: 'mahmoud@fruitfulday.comx',
        last_name: 'mahmoud@fruitfulday.comx',
        email: 'mahmoud@fruitfulday.comx',
        password: 'mahmoud@fruitfulday.comx',
    })

    const {errors = [], setErrors, validate} = Validation(signupSchema)

    const handleSignup = async (e) => {
        e.preventDefault();
        await setErrors([])

        await validate(userCreateInputs).then(async data => {

            if (data && Object.keys(data).length > 0) return;

            try {
                const apiCall: AxiosResponse | AxiosError | any = await UserCreate(userCreateInputs)

                if (apiCall?.status === 200) alert('account created');
                if (apiCall.status !== 200) alert(apiCall?.response?.data);
            } catch (e) {
                console.log(e)
            }
        })

    }

    return (
        <Form className="col-12 float-start" onSubmit={handleSignup}>
            <Form.Group className="float-start mb-3 col-12 col-md-6 pe-2" controlId="first-name-label">
                <FloatingLabel controlId="first-name" label="First name">
                    <Form.Control type="text" placeholder="first name" className={`${errors['first_name'] ? 'is-invalid' : ''}`}
                                  value={userCreateInputs.first_name}
                                  onChange={e => setSignupInputs({...userCreateInputs, first_name: e.target.value})}
                    />

                    <InputFeedback msg={errors['first_name']}/>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="float-start mb-3 col-12 col-md-6 ps-2" controlId="last-name-label">
                <FloatingLabel controlId="last-name" label="Last name">
                    <Form.Control type="text" placeholder="last name" className={`${errors['last_name'] ? 'is-invalid' : ''}`}
                                  value={userCreateInputs.last_name}
                                  onChange={e => setSignupInputs({...userCreateInputs, last_name: e.target.value})}
                    />

                    <InputFeedback msg={errors['last_name']}/>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="float-start mb-3 col-12 col-md-6 pe-2" controlId="email-label">
                <FloatingLabel controlId="email" label="Email">
                    <Form.Control type="email" placeholder="email" className={`${errors['email'] ? 'is-invalid' : ''}`}
                                  value={userCreateInputs.email}
                                  onChange={e => setSignupInputs({...userCreateInputs, email: e.target.value})}
                    />

                    <InputFeedback msg={errors['email']}/>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="float-start mb-3 col-12  col-md-6 ps-2 " controlId="password-label">
                <FloatingLabel controlId="password" label="Password">
                    <Form.Control type="password" placeholder="Password" className={`${errors['password'] ? 'is-invalid' : ''}`}
                                  value={userCreateInputs.password}
                                  onChange={e => setSignupInputs({...userCreateInputs, password: e.target.value})}
                    />

                    <InputFeedback msg={errors['password']}/>
                </FloatingLabel>
            </Form.Group>

            <div className={'w-75 mx-auto float-none text-center'}>
                <Button variant="outline-success" className={'px-5'} type="submit">Submit</Button>
            </div>

        </Form>
    )
}

export default UserForm
