import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/admin' element={<Login/>} />
        </Routes>
    )
}