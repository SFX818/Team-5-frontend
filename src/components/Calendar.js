
import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom'
import authHeader from '../utilities/authHeader.utilities'

// const API_URL = "http://localhost:8080/"


function Calendar() {


const [savedEvents, setSavedEvents] = useState([])

useEffect(() => {
    axios.get("http://localhost:8080/profile/myevents", {headers: authHeader()}) 
      .then((res) => {
          console.log(res.data)
        setSavedEvents(res.data)
      })
  }, [])

console.log(savedEvents)

  const display = () => (
   savedEvents.map((event, i) => {
      console.log(event)
      return (
        <div class="col-6 col-md-4">
          <div class="card">
            {/* <img src={event.images[6].url} class="card-img-top" alt="Eagles Group"></img> */}
            <div class="card-body">
              <h5 class="card-title">{event.name}</h5>
              {/* <p class="card-text">{event._embedded.venues[0].name}<br></br><span>{event.dates.start.localDate}</span></p> */}
              <Link to={{
                pathname: `/events/${event.eventId}`,
                state: { event }
              }}
                key={event.name}
              >
                More Information
                            </Link>
            </div>
          </div>
        </div>
      )
    })
  )

  return (
    <div class="container">
      <div class="row">
        <h1>Your Events</h1>
        {display()}
      </div>
    </div>
  )
}



export default Calendar 
