import api from "./api";
import {AxiosPromise} from "axios";

const companySearch = (payload): Promise<AxiosPromise> => {
    return api.get('company/search', {params: payload});
}

export default companySearch