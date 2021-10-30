import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const MangeOrders = () => {
    const [packages, setpackages] = useState([])

    useEffect(() => {
        fetch('https://dry-woodland-13104.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setpackages(data))

    }, [])
    return (
        <div>
            <h1>Mange All Package</h1>

            <div className="row container mx-auto">
                {
                    packages.map((service) => (
                        <div className="col-md-4 g-4 border rounded-3 border-danger ">
                            <img className="w-100 " src={service.img} alt="" />
                            <h3>{service.title}</h3>
                            <h5><span className="text-danger">Price: </span>${service.price}</h5>
                            <h6><span className="text-danger">Time: </span>{service.time}</h6>
                            <button className="btn btn-warning mb-1">Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MangeOrders;