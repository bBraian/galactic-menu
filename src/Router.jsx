import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { Cart } from "./pages/Cart";
import { Client } from "./pages/Client";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Client/>} />
            <Route path={'/:clientName'} element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    )
}