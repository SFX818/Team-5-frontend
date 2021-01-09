import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import authHeader from '../utilities/authHeader.utilities'
import { deleteEvent } from "../services/event.service"
import { useHistory } from "react-router-dom";



// const API_URL = "http://localhost:8080/"
function Calendar() {
  let history = useHistory();
  const [savedEvents, setSavedEvents] = useState([])
  const deleteSavedEvent = (e) => {

    console.log(e)
    let res = deleteEvent(e.target.parentNode.id)
    history.push('/calendar')
    window.location.reload()
    console.log(res)
  }

  useEffect(() => {
    axios.get("http://localhost:8080/profile/myevents", { headers: authHeader() })
      .then((res) => {
        setSavedEvents(res.data)
      })
  }, [])

  const display = () => (
    savedEvents.map((event, i) => {
      console.log(event)
      return (
        <div key={i} className="col-6 col-md-4">
          <div className="card">
            {/* <img src={event.images[6].url} className="card-img-top" alt="Eagles Group"></img> */}
            <div id={event._id} className="card-body">
              <h5 className="card-title">{event.name}</h5>
              <Link
                to={{
                  pathname: `/event/comments/${event._id}`
                }}
              >
                More Information
              </Link>
              <button onClick={deleteSavedEvent}>DELETE EVENT</button>
            </div>
          </div>
        </div>
      )
    })
  )

  return (
    <div class="container">
      <div class="row">
        <h1 className="calender-title">My Calendar of Events</h1>
        <hr className="line-break"></hr>
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