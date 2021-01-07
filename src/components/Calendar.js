import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import authHeader from '../utilities/authHeader.utilities'
import ButtonSpinner from './common/ButtonSpinner'
import { deleteEvent } from '../services/event.service'
import { useHistory } from "react-router-dom";


// const API_URL = "http://localhost:8080/"
function Calendar() {
  let history = useHistory();

  const [savedEvents, setSavedEvents] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/profile/myevents", { headers: authHeader() })
      .then((res) => {
        setSavedEvents(res.data)
      })
  }, [])

  const handleDelete = (e) => {
    e.preventDefault()
    console.log(e)
    deleteEvent()
    // history.push('/calendar')
    // window.location.reload()
  }

  const display = () => (
    savedEvents.map((event, i) => {
      return (
        <div key={i} className="col-6 col-md-4">
          <div className="card">
            {/* <img src={event.images[6].url} class="card-img-top" alt="Eagles Group"></img> */}
            <div className="card-body">
              <h5 className="card-title">{event.name}</h5>
              <Link
                to={{
                  pathname: `/event/comments/${event._id}`,
                  state: { event }
                }}
              >
                More Information
              </Link>
              <form method="DELETE" onSubmit={handleDelete}>
                <input hidden type="text" name="eventId" value={event.eventId} />
                <input hidden type="text" name="name" value={event.name} />
                <input hidden type="text" name="date" value={event.date} />
                <input hidden type="text" name="location" value={event.location} />
                <ButtonSpinner text="Delete From Calendar" />
              </form>
            </div>
          </div>
        </div>
      )
    })
  )

  return (
    <div className="container">
      <div className="row">
        <h1>Your Events</h1>
        {display()}
      </div>
    </div>
  )
}



export default Calendar