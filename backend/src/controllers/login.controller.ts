import jwt from "jsonwebtoken";
import {validateLoginData, verifyPassword} from "../services/login.service";
import {getUserByEmail} from "../services/user.service";
import TypeServiceRequest from "../types/TypeServiceRequest";
import TypeDataValidationResponse from "../types/TypeDataValidationResponse";
import TypeUser from "../types/TypeUser";

const login = async (req): Promise<TypeServiceRequest> => {
    const {email, password} = req.body

    const validLogin: TypeDataValidationResponse = validateLoginData({email, password})
    if (!validLogin.isValid) return {body: validLogin.errors, statusCode: 400};

    try {
        const user: TypeUser = await getUserByEmail(email)
        if (!user) return {body: 'invalid username or password' , statusCode: 400};

        if (user && user.password) {
            const verifyPass: boolean = verifyPassword(password, user.password)

            if (!verifyPass) return {body: 'invalid login details', statusCode: 400};

            const token = jwt.sign({id: user.id}, process.env.SECRET_KEY);
            return {body: {user: user, token}, statusCode: 200}
        }

    } catch (err) {
        console.log(err)
        return {body: err?.message??'something went wrong', statusCode: 500}
    }
};

export {login}
