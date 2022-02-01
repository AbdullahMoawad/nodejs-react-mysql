import api from "../api/api";
import {AxiosError, AxiosResponse} from "axios";
import TypeSignupData from "../types/TypeSignupData";

const SignupApi = (signupInputs: TypeSignupData): Promise<AxiosResponse | AxiosError> => {
    return api.post('signup', signupInputs)
}

export default SignupApi