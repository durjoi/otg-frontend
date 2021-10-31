import React from 'react';
import { useParams } from 'react-router';

const MyBooking = () => {
    const { user_id } = useParams();

    return (
        <div>
            <h1>This is my booking - { user_id }</h1>
        </div>
    );
};

export default MyBooking;