import api from "./api";
import {AxiosPromise} from "axios";

const userListGet =  (): Promise<AxiosPromise> => {
  return api.get('user');
}

export default userListGet