import schemaValidate from "../validationSchema/schemaValidate";
import signupSchema from "../validationSchema/signupSchema";
import TypeSignupData from "../types/TypeSignupData";
import TypeDataValidationResponse from "../types/TypeDataValidationResponse";

const validateSignupData = (signupData: TypeSignupData): TypeDataValidationResponse => {
    try {
        schemaValidate(signupSchema, signupData)
        return {isValid: true}
    } catch (err) {
        return {isValid: false, errors: err,}
    }
}

export {validateSignupData}