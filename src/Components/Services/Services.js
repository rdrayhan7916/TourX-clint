import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <h5 className="text-warning pt-5">Choose Your Package</h5>
            <h1>Select Your Best Package <br /> For Your Travle</h1>
            <div className="row container mx-auto">
                {
                    services.map((service) => (
                        <div className="col-md-4 g-4 border rounded-3 border-danger ">
                            <img className="w-100 " src={service.img} alt="" />
                            <h3>{service.title}</h3>
                            <h5><span className="text-danger">Price: </span>${service.price}</h5>
                            <h6><span className="text-danger">Time: </span>{service.time}</h6>
                            <button className="btn btn-danger mb-1">BOOK NOW</button>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Services;