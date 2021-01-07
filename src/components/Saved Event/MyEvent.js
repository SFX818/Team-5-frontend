import React, { useState, useEffect } from 'react'
import authHeader from '../../utilities/authHeader.utilities'
import axios from 'axios'
import CommentsList from './CommentsList'
import { deleteEvent } from '../../services/event.service'
import { useHistory } from "react-router-dom";
import ButtonSpinner from '../common/ButtonSpinner'

const MyEvent = (props) => {
  let history = useHistory();
  const [event, setEvent] = useState('')
  const eventId = (props.location.state.event._id)
  const name = (props.location.state.event.name)
  const date = (props.location.state.event.date)
  const location = (props.location.state.event.location)

  useEffect(() => {
    axios.get(`http://localhost:8080/events/comments/${eventId}`, { headers: authHeader() })
      .then(res => {
        setEvent(res.data)
      },
        (error) => {
          return (error)
        }
      )
  }, [eventId])

  const handleDelete = (e) => {
    e.preventDefault()
    console.log(event)
    deleteEvent(
      eventId,
      name,
      date,
      location
    )
    // history.push('/calendar')
    // window.location.reload()
  }
  // see the event-state where the api set data to
  console.log(event.comments)


  return (
    <div className="container">
      <p>Event: {event.name} </p>
      <p>date: {event.date} </p>
      <p>eventId: {event.eventId}</p>
      <p>location: {event.location}</p>
        __v: {event._v}/_id: {event._id}
      < CommentsList
        comments={event.comments}
      />
      <form>
        <label>
          Comments:
    <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <button onClick={MyEvent}>DELETE COMMENT</button>
      <form method="DELETE" onSubmit={handleDelete}>
        <input hidden type="text" name="eventId" value={event.eventId} />
        <input hidden type="text" name="name" value={event.name} />
        <input hidden type="text" name="date" value={event.date} />
        <input hidden type="text" name="location" value={event.location} />
        <ButtonSpinner text="Delete From Calendar" />
      </form>
    </div>
  );
};





export default MyEvent;