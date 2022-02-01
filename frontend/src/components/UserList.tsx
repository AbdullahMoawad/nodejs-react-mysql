import userListGet from "../api/userListGet";
import {useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import UserBox from "../components/UserBox";
import {Alert} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";
import UserSearchHandle from "./UserSearchHandle";
import TypeUser from "../types/TypeUser";

const UserList = () => {
    const [queryParams] = useSearchParams();
    const [userList, setUserList] = useState([])
    const [searchResults, setSearchResults] = useState<TypeUser[]>()
    const {handleSearch} = UserSearchHandle()

    const getUserList = () => {
        userListGet()
            .then((res: AxiosResponse | any) => {
                if (res?.status === 200) {
                    setUserList(res?.data)
                }
            }).catch(e => console.log(e))
    }

    const search = async () => {
        try {
            const apiCall: any = await handleSearch()

            if (apiCall?.status === 200) setUserList(apiCall?.data);
            if (apiCall.status !== 200) alert(apiCall?.response?.data);
        } catch (e) {
            console.log('user search', e)
        }
    }
    useEffect(() => getUserList(), [])
    useEffect(() => console.log(searchResults), [searchResults])
    useEffect(() => {
        search()
    }, [queryParams])

    return (
        <>
            {searchResults?.length === 0 && <Alert className={'float-start col-12'}>No companies</Alert>}

            {userList?.length > 0 && (
                <>
                    {!searchResults && userList.map((user: TypeUser) => (
                        <div className={'float-start col-12 col-md-6 p-2'} key={user.id}>
                            <UserBox user={user}/>
                        </div>
                    ))}

                    {searchResults && searchResults.length > 0 && searchResults.map((user: TypeUser) => (
                        <div className={'float-start col-12 col-md-6 p-2'} key={user.id}>
                            <UserBox user={user}/>
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default UserList