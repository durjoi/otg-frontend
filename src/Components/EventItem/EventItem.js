import React from 'react';
import './EventItem.css';

const EventItem = ({title, img, _id, subtitle, price}) => {
    return (
        <div className="col-md-4">
            <div className="event_item" style={{ "backgroundImage":`url(${img})`, "backgroundSize":"cover", "backgroundPosition":"center" }}>
                {/* <img src={img} alt="" /> */}
                
                <div className="event_item_content">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                    <p><small>BDT {price} per person</small></p>
                    <a href={`/book/event/${_id}`} className="event_item_booking_btn">Book Now</a>
                </div>
                
            </div>
        </div>
    );
};

export default EventItem;