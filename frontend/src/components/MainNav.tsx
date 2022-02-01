import {Nav, NavDropdown} from "react-bootstrap";
import TypeNavLocation from "../types/TypeNavLocation";

const MainNav = () => {

    const locations: TypeNavLocation[] = [
        {href: '/', title: 'home',},
        {
            href: '/company',
            title: 'Companies',
        },
        {
            href: '/user',
            title: 'user',
            children: [
                {href: '/user/company', title: 'company',},
                {href: '/user/company/employees', title: 'employees',},
                {href: '/user/company/employees/create', title: 'add employee',},
            ]
        },
        {href: '/login', title: 'Login',},
        {href: '/signup', title: 'signup',},
    ]

    return (
        <Nav activeKey="/home" className={'text-capitalize'}>
            {locations.map(location => (
                <div key={location.href}>
                    {location?.children && location?.children.length && (
                        <NavDropdown title={location.title}>
                            {location?.children.map(child => (
                                <NavDropdown.Item href={child.href} eventKey={child.href} key={child.href}>{child.title}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    )}

                    {!location?.children && (
                        <Nav.Item>
                            <Nav.Link href={location.href} eventKey={location.href} key={location.href}>{location.title}</Nav.Link>
                        </Nav.Item>
                    )}
                </div>))}
        </Nav>
    )
}

export default MainNav