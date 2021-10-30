import React from 'react';
import { useState } from 'react';
import AddService from '../AddAService/AddService';
import MangeOrders from '../MangeOrders/MangeOrders';
import MyOrders from '../MyOrders/MyOrders';

import './Admin.css'

const Admin = () => {
    const [control, setControl] = useState("myorder")
    return (
        <div>
            <div className="row">
                <div className="col-md-3 dash-link bg-dark text-white">
                    <li><button className="btn-dark text-white" onClick={() => setControl("myorder")}>My Orders</button></li>
                    <li><button className="btn-dark text-white" onClick={() => setControl("mangepackages")}>Mange All Packages</button></li>
                    <li><button className="btn-dark text-white" onClick={() => setControl("addservice")}>Add A New Service</button></li>
                </div>
                <div className="col-md-9 text-center ">
                    {control === "myorder" && <MyOrders></MyOrders>}
                    {control === "mangepackages" && <MangeOrders></MangeOrders>}
                    {control === "addservice" && <AddService></AddService>}
                </div>
            </div>
        </div>
    );
};

export default Admin;