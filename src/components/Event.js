import React, { useState } from 'react'
import { save } from '../services/event.service'
import ButtonSpinner from './common/ButtonSpinner'
import { useHistory } from "react-router-dom";

// // Helper
// import { resMessage } from '../utilities/functions.utilities'

const Event = (props) => {
    let history = useHistory();
    const [content, setContent] = useState(props.location.state.data)
    console.log(content)
    const handleSave = (e) => {
        e.preventDefault()
        save(
            content.id,
            content.name,
            content.dates.start.localDate,
            content._embedded.venues[0].name
        )
        history.push('/calendar')
        window.location.reload()
    }

    return (
        <div className="col s6">
            <div id="all-info" className="card-panel teal lighten-2">
                <div className="card-content white-text">
                    <h2 className="card-title">{content.name}</h2>
                    <form method="POST" onSubmit={handleSave}>
                        <input hidden type="text" name="eventId" value={content.eventId} />
                        <input hidden type="text" name="name" value={content.name} />
                        <input hidden type="text" name="date" value={content.dates.start.localDate} />
                        <input hidden type="text" name="location" value={content._embedded.venues[0].name} />
                        <ButtonSpinner text="Add to Calendar" />
                    </form>
                    <p>{content.dates.start.localDate}</p>
                    <p>{content._embedded.venues[0].name}</p>
                    <p>{content._embedded.venues[0].city.name},{content._embedded.venues[0].country.name}</p>
                    <img src={content.images[0].url} alt="Main Event Promotion"></img>
                    <p>Genre: {content.classifications[0].genre.name}</p>
                    <p>{content.info}</p>
                </div>
            </div>
        </div>
    )
}

export default Event
