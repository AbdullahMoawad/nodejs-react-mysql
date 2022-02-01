import api from "./api";
import {AxiosPromise} from "axios";

const companyConnectionsActiveGet = (payload): Promise<AxiosPromise> => {
    return api.post('company-connections/active', payload);
}

export default companyConnectionsActiveGet