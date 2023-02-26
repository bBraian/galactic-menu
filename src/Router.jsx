import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { Demo } from "./pages/Demo";
import { Cart } from "./pages/Cart";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/demo' element={<Demo/>} />
        </Routes>
    )
}