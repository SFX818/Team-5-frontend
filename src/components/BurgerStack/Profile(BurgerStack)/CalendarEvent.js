import React from "react";
import EventComments from './EventComments'
import shortid from 'shortid'
import eventWithComments from '../../../services/event.service'

const CalendarEvent = (name, date, location, comments) => {
    //{name, date, location, comments}
    // const x= eventWithComments();
    // console.log(`Calendar Event: ${x}`)

  return(
    
    <div className="col-sm-6">
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
                <p className="card-text">{date}</p>
                <p className="card-text">{location}</p>
                {/* {comments.map((comment)=>
                    <EventComments 
                        key={shortid.generate()} 
                        comments= {comments} 
                    />
                )} */}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>

        
  ) 
  
};

export default CalendarEvent;

