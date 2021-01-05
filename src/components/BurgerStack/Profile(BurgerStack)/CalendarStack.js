import React, {useEffect, useState} from 'react'
import CalendarEvent from './CalendarEvent'
import axios from 'axios'
import authHeader from '../../../utilities/authHeader.utilities'
//import authHeader from '../utilities/authHeader.utilities'
import { resMessage } from '../../../utilities/functions.utilities'

import EventService from '../../../services/event.service'

const CalendarStack = (user) => {
   

    const [calendar, setCalendar]=useState([])
    const [message, setMessage] = useState("")

    EventService.userEvent()
    .then(response=>{
        console.log(response.data)
    })

    useEffect(()=>{
        setCalendar([])
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
        {calendar}
        {/* {calendar.map((calendarEvent)=>
            < CalendarEvent 
                key={calendarEvent._id} 
                name={calendarEvent.name} 
                date={calendarEvent.date} 
                location={calendarEvent.location}
                comments = 'hi'
                // comments={calendarEvent.comments}
            />
        )} */}
        </div>
    </>
  ) 
  
};

export default CalendarStack;

