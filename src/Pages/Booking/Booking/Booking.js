import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    const { description, img, name, price } = service;
    console.log(service);



    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default Booking;