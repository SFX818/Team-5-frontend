import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom'
import authHeader from '../utilities/authHeader.utilities'
import {deleteEvent} from "../services/event.service"


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
            <div id={event._id} class="card-body">
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
              <Link 
                to={{
                    pathname: `/event/comments/${event._id}`
                  }}
              >
                TEST: Go to Saved Event
              </Link>
                  <button onClick={deleteSavedEvent}>DELETE EVENT</button>
            </div>
          </div>
        </div>
      )
    })
  )
  const deleteSavedEvent = (e) => {
    
    console.log(e)
    let res= deleteEvent(e.target.parentNode.id)
    console.log(res)
   
    
    
    
  }


  return (
    <div class="container">
      <div class="row">
        <h1>My Calendar with Events</h1>
        {display()}
      </div>
    </div>
  )

  }

// took button inside the div that's diaplys event 
//passed the event to our deletesaved event
// eeach box has it's own unique id, set box id to the event id 
//on click we pass that id on to delete events



export default Calendar