import UserSearchForm from "../components/UserSearch";
import UserList from "../components/UserList";

const Users = () => (
    <div className={'container'}>
        <h1>UserList</h1>
        <UserSearchForm/>
        <UserList/>
    </div>
)


export default Users