import bcrypt from "bcryptjs";
import {validateSignupData} from "../services/signup.service";
import {createUser, getUserByEmail} from "../services/user.service";
import TypeSignupData from "../types/TypeSignupData";
import TypeDataValidationResponse from "../types/TypeDataValidationResponse";

const signup = async (req) => {
    let {first_name, last_name, password, email, company = 0, status = true} = req.body
    const signupData: TypeSignupData | any = {first_name, last_name, password, email, company, status};

    const validateSignup: TypeDataValidationResponse = validateSignupData(signupData);
    if (!validateSignup.isValid) return {body: validateSignup.errors, statusCode: 400};

    try {
        const emailExist = await getUserByEmail(email)
        if (emailExist) return {body: 'Email already exist', statusCode: 400};

        const salt = await bcrypt.genSalt(10);
        signupData.password = await bcrypt.hash(password, salt);

        const user = await createUser(signupData)

        return user ? {body: user, statusCode: 200} : {body: 'action failed', statusCode: 500}
    } catch (err) {
        console.log(err)
        return {body: err?.message??'something went wrong', statusCode: 500}
    }
};


export {signup}