import React from 'react';
import { useForm } from 'react-hook-form';

const Booking = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch("https://boiling-shelf-71708.herokuapp.com/booking", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data)

    };
    return (
       
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="m-1 mt-5" placeholder="Name " {...register("name",)} />
                <br />
                <input className="m-1" placeholder="Email" {...register("email",)} />
                <br />
                <input className="m-1" placeholder="Address" {...register("address")} />

                <br />
                <input className="m-1 btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default Booking;