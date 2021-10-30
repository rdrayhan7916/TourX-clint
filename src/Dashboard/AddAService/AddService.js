import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-5" {...register("title")} /><br />
                <input className="mt-1" {...register("price")} /><br />
                <input className="mt-1"  {...register("img")} /><br />
                <input className="mt-1 btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddService;