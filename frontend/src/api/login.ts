import api from "./api";
import TypeLoginData from "../types/TypeLoginData";
import {AxiosPromise} from "axios";

const LoginApi = (loginInputs: TypeLoginData):Promise<AxiosPromise> => {
    return api.post('login', loginInputs)
}

export default LoginApi