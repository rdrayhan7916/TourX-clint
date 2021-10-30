import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';

import './Admin.css'

const Admin = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3 dash-link">
                    <Link className="dash" to="myorder"><li>My Orders</li></Link>
                    <Link className="dash" to="mangeorder"><li>Mange All Orders</li></Link>
                    <Link className="dash" to="addservice"><li>Add A New Service</li></Link>
                </div>
                <div className="col-md-9">
                    <Banner></Banner>
                </div>
            </div>
        </div>
    );
};

export default Admin;