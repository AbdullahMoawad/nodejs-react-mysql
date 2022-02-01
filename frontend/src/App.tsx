import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserCreate from "./pages/UserCreate";
import Users from "./pages/Users";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "./components/MainNav";
import Companies from "./pages/Companies";
import UserCompany from "./pages/UserCompany";

function App() {
    return (
        <div className="App">
            <div className={'float-start col-12 my-4 text-center'}>
                <MainNav/>
            </div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/company" element={<Companies/>}/>
                <Route path="/user" element={<Users/>}/>
                <Route path="/user/company" element={<UserCompany/>}/>
                <Route path="/user/company/employees" element={<Users/>}/>
                <Route path="/user/company/employees/create" element={<UserCreate/>}/>
            </Routes>
        </div>
    );
}

export default App;
