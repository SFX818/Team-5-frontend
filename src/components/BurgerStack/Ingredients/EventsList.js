import React, {useEffect, useState} from 'react'
import Event from './Event'
import axios from 'axios'
import CalendarStack from '../Profile(BurgerStack)/CalendarStack'
//'../../CalendarStack(BurgerStack)/CalendarStack'

const EventsList = () => {

  const [events, setEvents] = useState([])
  const [calendar, setCalendarStack] = useState([])

  const listEvents = (event) => {
    setEvents([ event, ...events])
  }

    useEffect(() =>{
        axios.get('http://localhost:8080/profile/myevents')
        .then((res)=>{
            setEvents([
                res.data.results
            ])
        })
    },[])


  useEffect(() =>{
    setCalendarStack([
      { name: "firstEventPlaceholder", color: "saddlebrown" }
    ])
    },[])


  const stackOnCalendarStack = (event) =>{
    console.log(event)
    // e.preventDefault()
    setCalendarStack([ event, ...events])
    
  }


  return(
     <>
     <h2>Events</h2>
     <ul>
     {events.map((event,i)=>
       <Event key={i} name={event.name} color={event.color} stackOnCalendarStack={()=>{stackOnCalendarStack(event)}}/>
     )}
     </ul>
     <CalendarStack calendar={calendar}/>
     
      
     </>
  );
};

export default EventsList;
