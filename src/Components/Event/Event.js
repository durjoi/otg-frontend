import React from 'react';
import useEvent from '../../Hooks/useEvent';
import EventItem from '../EventItem/EventItem';
import './Event.css'

const Event = () => {

    const { events, loading } = useEvent();


    return (
        <section>
            <div className="events_header">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-12 text-center d-flex justify-content-center align-items-center">
                            <h2>Upcomming Events</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-5 pb-5">
                <div className="row">
                {
                    loading ? <div class="spinner-border text-warning m-auto"></div> :
                    events.map(event => <EventItem key={event._id} _id={event._id} title={event.title} img={event.img} subtitle={event.subtitle} price={event.price}></EventItem>)
                }
                </div>
            </div>
        </section>
    );
};

export default Event;