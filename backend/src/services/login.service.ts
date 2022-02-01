import schemaValidate from "../validationSchema/schemaValidate";
import TypeLoginData from "../types/TypeLoginData";
import loginSchema from "../validationSchema/loginSchema";
import bcrypt from 'bcryptjs';
import TypeDataValidationResponse from "../types/TypeDataValidationResponse";

const validateLoginData = (loginData: TypeLoginData): TypeDataValidationResponse => {
    try {
        schemaValidate(loginSchema, loginData)
        return {isValid: true}
    } catch (err) {
        return {isValid: false, errors: err,}
    }
}

const verifyPassword = (userPassword: string, password: string): boolean => {
    return bcrypt.compare(password, userPassword);
}

export {validateLoginData, verifyPassword}