import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/service', data)
            .then(res => {
                // console.log(res);
                if (res.data._id) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <br />
                <input placeholder='description' {...register("description")} />
                <br />
                <input placeholder='price' type="number" {...register("price")} />
                <br />
                <input placeholder='img' type="text" {...register("img")} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;