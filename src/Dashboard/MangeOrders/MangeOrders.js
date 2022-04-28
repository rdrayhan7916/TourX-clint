import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const MangeOrders = () => {
    const [packages, setpackages] = useState([])
    const [deletedCount, setDeleteCount] = useState(0)

    useEffect(() => {
        fetch('https://boiling-shelf-71708.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setpackages(data))

    }, [deletedCount])

    const handleDelete = id => {
        console.log(id)
        fetch(`https://boiling-shelf-71708.herokuapp.com/service/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setDeleteCount(data.deletedCount)
                console.log('delete')
                if (data.deletedCount > 0) {
                    alert('Deleted succsessfully')
                }
            })
    }
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
                            <button onClick={() => handleDelete(service._id)} className="btn btn-warning mb-1">Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MangeOrders;