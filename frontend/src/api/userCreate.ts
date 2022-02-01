import api from "../api/api";
import {AxiosPromise} from "axios";
import TypeSignupData from "../types/TypeSignupData";

const UserCreate = (userCreateInputs: TypeSignupData): Promise<AxiosPromise> => {
    return api.post('user', userCreateInputs)
}

export default UserCreate