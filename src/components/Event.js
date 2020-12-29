import React, { useState, useRef } from 'react'
import { save } from '../services/event.service'
import ButtonSpinner from './common/ButtonSpinner'
import Form from 'react-validation/build/form'

// Helper
import { resMessage } from '../utilities/functions.utilities'

const Event = (params) => {
    const form = useRef()

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")

    let eventData = params.location.state.data
    console.log(eventData)


    const handleSave = (e) => {
        e.preventDefault()
        setId(id)
        setName(name)
        setDate(date)
        setLocation(location)
        save(id, name, date, location)
            .then(
                (error) => {
                    resMessage(error)
                }
            )
    }

    return (
        <div className="col s6">
            <div id="all-info" className="card-panel teal lighten-2">
                <div className="card-content white-text">
                    <h2 className="card-title">{eventData.name}</h2>
                    <form method="POST" onSubmit={handleSave} ref={form}>
                        <input hidden type="text" name="eventId" value={eventData.eventId} />
                        <input hidden type="text" name="name" value={eventData.name} />
                        <input hidden type="text" name="date" value={eventData.dates.start.localDate} />
                        <input hidden type="text" name="location" value={eventData._embedded.venues[0].state.name} />
                        <ButtonSpinner text="Add to Calendar" />
                    </form>
                    <p>{eventData.dates.start.localDate}</p>
                    <p>{eventData._embedded.venues[0].name}</p>
                    <p>{eventData._embedded.venues[0].city.name},{eventData._embedded.venues[0].state.name}</p>
                    <img src={eventData.images[0].url} alt="Main Event Promotion"></img>
                    <p>Genre: {eventData.classifications[0].genre.name}</p>
                    <p>{eventData.info}</p>
                    <img src={eventData.seatmap.staticUrl} alt="Seat Map"></img>
                </div>
            </div>
        </div>
    )
}

export default Event
