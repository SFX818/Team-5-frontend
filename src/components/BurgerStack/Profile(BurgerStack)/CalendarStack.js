import React, {useEffect, useState} from 'react'
import CalendarEvent from './CalendarEvent'
import axios from 'axios'
import authHeader from '../../../utilities/authHeader.utilities'
//import authHeader from '../utilities/authHeader.utilities'
import { resMessage } from '../../../utilities/functions.utilities'

const CalendarStack = () => {
    // let eventData = params.location.state.data
    // console.log(eventData)


    const [calendar, setCalendar]=useState([])

    const [message, setMessage] = useState("")

    useEffect(()=>{
        axios.get('http://localhost:8080/profile/myevents/', {header: authHeader()})
        .then((response)=>{
            console.log(`RESPONSE DATA: ${response.data}`)
            setCalendar(response.data)
        },
        (error) => {
            setMessage(resMessage(error))
        }
    )
    },[])

  return(
    <>
        <h2>My Calendar</h2>
        {message && (
            <div className='form-group'>
                <div className='alert alert-danger' role='alert'>
                    {message}
                </div>
            </div>
        )}
        <div>
        {calendar.map((calendarEvent)=>
            < CalendarEvent 
                key={calendarEvent._id} 
                name={calendarEvent.name} 
                date={calendarEvent.date} 
                location={calendarEvent.location}
                comments={calendarEvent.comments}
            />
        )}
        </div>
    </>
  ) 
  
};

export default CalendarStack;

