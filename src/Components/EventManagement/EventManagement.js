import axios from 'axios';
import React from 'react';
import useEvent from '../../Hooks/useEvent';

const EventManagement = () => {
    const {events, setEvents} = useEvent();

    const handleDelete = (event_id) => {
        const confirm = window.confirm("Want to Delete this Event?");
        if(confirm) {
            axios.delete(`https://floating-crag-86254.herokuapp.com/events/${event_id}`)
                .then(() => {
                    setEvents([...events.filter(b => b._id !== event_id)]);
                    alert("Event deleted!");
            });
        }
        
    }

    return (
        <section>
            <div className="events_header">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-12 text-center d-flex justify-content-center align-items-center">
                            <h2>All Events</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ "height" : "70vh" }}>
                <div className="row">
                    <div className="col-md-12 " style={{ "overflowX":'auto' }}>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Subtitle</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events.map(event => {
                                    return (
                                        <tr key={event._id}>
                                            <td>{event.title}</td>
                                            <td>{event.subtitle}</td>
                                            <td>{event.description}</td>
                                            <td>{event.price}</td>
                                            <td>{event.img}</td>
                                            <td><button onClick={() => handleDelete(event._id)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    </div> 
                </div>
            </div>

        </section>
    );
};

export default EventManagement;