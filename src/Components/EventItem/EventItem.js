import React from 'react';
import { NavLink } from 'react-router-dom';
import './EventItem.css';

const EventItem = ({title, img, _id, subtitle, price}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card upcomming-events-item">
            <div className="upcomming-events-thumb">
                <img src={img} className="card-img-top" alt="..."/>
                <button className="upcomming-events-price">BDT {price}</button>
            </div>

            <div className="card-body">
                <h5 className="card-title upcomming-events-item-title">
                    <a href="{{ route('frontend.events.show', $item->id) }}" className="reset-link">{title}</a>
                </h5>
            <p className="card-text upcomming-events-item-subtitle txt-grey">{ subtitle }</p>
            <NavLink to={`/book/event/${_id}`} className="event_item_booking_btn">Book Now</NavLink>
            </div>
        </div>             
        </div>
        
    );
};

export default EventItem;
