import React, { useState, useEffect } from 'react'
import authHeader from '../../utilities/authHeader.utilities'
import axios from 'axios'
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'
import { saveComment } from '../../services/event.service'
import ButtonSpinner from '../common/ButtonSpinner'
import { useHistory } from "react-router-dom";


const MyEvent = (params) => {
    let history = useHistory();
    const [event, setEvent] = useState('')
    const [comments, setComments] = useState([])

    const eventId = (params.match.params.id)

    useEffect(() => {
        axios.get(`http://localhost:8080/events/comments/${eventId}`, { headers: authHeader() })
            .then(res => {
                setEvent(res.data)
                setComments(res.data.comments)
            },
                (error) => {
                    return (error)
                }
            )
    }, [eventId])

    const addToList = (newComment) => {
        setComments([newComment, ...comments])
        history.push(`/event/comments/${eventId}`)
        window.location.reload()
    }

    const handleDelete = () => {

    }

    return (
        <div className="container">
            <p>Event: {event.name} </p>
            <p>date: {event.date} </p>
            <p>eventId: {event.eventId}</p>
            <p>location: {event.location}</p>
        __v: {event._v}/_id: {event._id}

            <h6>Comments: </h6>
            < CommentsList
                comments={comments}
            />
            < CommentForm
                eventId={eventId}
                saveComment={saveComment}
                addToList={addToList}
            />
            {/* <form>
  <label>
    Comments:
    <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form> */}

            <button onClick={MyEvent}>DELETE COMMENT</button>

        </div>
    );







};

export default MyEvent;