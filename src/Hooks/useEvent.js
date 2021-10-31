import axios from 'axios';
import { useEffect, useState } from 'react';

const useEvent = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('https://floating-crag-86254.herokuapp.com/events').then((response) => {
            setEvents(response.data);
        });
    }, []);

    return [events, setEvents];

};

export default useEvent;