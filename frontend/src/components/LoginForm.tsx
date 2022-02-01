import {Alert, Button, FloatingLabel, Form} from "react-bootstrap";
import {useState} from "react";
import loginApi from "../api/login";
import {useNavigate} from "react-router-dom"

const LoginForm = () => {
    const navigate = useNavigate();

    const [loginInputs, setLoginInputs] = useState({
        email: 'mahmoud@fruitfulday.comx',
        password: 'mahmoud@fruitfulday.comx',
    })
    const [loginError, setLoginError] = useState<string>()


    const handleLogin = async (e) => {
        e.preventDefault();
        const apiCall: any = await loginApi(loginInputs);

        if (apiCall.status === 200) {
            await localStorage.setItem('x-token', apiCall?.data?.token)
            await localStorage.setItem('username', apiCall?.data?.user?.first_name)
            await localStorage.setItem('userCompany', apiCall?.data?.user?.company_id)

            if (!apiCall?.data?.user?.company_id) {
                navigate('/user/company')
                return
            }
            navigate('/company')
            return
        }

        if (apiCall.status !== 200) alert(apiCall?.response?.data);
    }

    return (
        <Form className="col-12 float-start" onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="email-label">
                <FloatingLabel controlId="email" label="Email">
                    <Form.Control type="email"
                                  placeholder="Enter email"
                                  value={loginInputs.email}
                                  onChange={e => setLoginInputs({...loginInputs, email: e.target.value})}
                    />
                </FloatingLabel>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password-label">
                <FloatingLabel controlId="password" label="Password">
                    <Form.Control type="password"
                                  placeholder="Password"
                                  value={loginInputs.password}
                                  onChange={e => setLoginInputs({...loginInputs, password: e.target.value})}
                    />
                </FloatingLabel>
            </Form.Group>

            <div className={'w-75 mx-auto float-none'}>
                <Button variant="outline-success" className={'w-100'} type="submit">Login</Button>
            </div>

            {loginError ? <Alert className="float-alert w-100 p-1 text-capitalize mt-4 text-center" variant="danger">{loginError}</Alert> : null}
        </Form>
    )
}

export default LoginForm
