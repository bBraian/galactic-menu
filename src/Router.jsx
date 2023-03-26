import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { Demo } from "./pages/Demo";
import { Cart } from "./pages/Cart";
import { api } from "./lib/axios";
import { Client } from "./pages/Client";

export function Router() {
    const [clientsRouter, setClientsRoutes] = useState([]);

    async function getClientsRoutes() {
        const res = await api.get('clients/all');
        setClientsRoutes(res.data);
    }

    useEffect(() => {
        getClientsRoutes();
    }, [])

    console.log(clientsRouter);

    return (
        <Routes>
            {clientsRouter.map(client => (
                <Route 
                    key={client.id} 
                    path={`/`+client.url} 
                    element={<Home client={client} />} 
                />
            ))}
            <Route path='/' element={<Client/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/demo' element={<Demo/>} />
        </Routes>
    )
}