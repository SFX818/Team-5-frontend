import React, { useState, useEffect } from 'react'
import { getAllComments } from '../../services/event.service'
import authHeader from '../../utilities/authHeader.utilities'
import axios from 'axios'

import { resMessage } from '../../utilities/functions.utilities'

const MyEvent = (params) => {

    const [message, setMessage] = useState('')
    const [event, setEvent] = useState('')

    const eventId=(params.match.params.id)
        
        useEffect( ()=>{
            axios.get(`http://localhost:8080/events/comments/${eventId}`, { headers: authHeader() })
            .then(res=>{
                setEvent(res.data)
            },
            (error) => {
                return(error)
            }
        )},[])
        // see the event-state where the api set data to
        //console.log(event)
       

    return (
      <div className="container">
        <p>Event: {event.name} </p>
        <p>date: {event.date} </p>
        <p>eventId: {event.eventId}</p>
        <p>location: {event.location}</p>
        __v: {event._v}/_id: {event._id}

        <Link 
                to={{
                  pathname: `/events/comment/${comment._id}`,
                  state: { data }
                }}
                key={data.name}
              >
                More Information
              </Link>
        
      </div>
    );
};
  
  export default MyEvent;
  