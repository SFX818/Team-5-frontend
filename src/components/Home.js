import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  const [eventData, setEventData] = useState([])

  useEffect(() => {
    axios.get("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=0wQvZLMQGzPOHkz1uaAlvIfQ8NQt8ZDe")
      .then((res) => {
        setEventData(res.data._embedded.events)
      })
  }, [])

  const display = () => (
    eventData.map((data, i) => {
      console.log(data)
      return (
        <div key={i} className="col s6">
          <div id="all-info" className="card-panel teal lighten-2">
            <div className="card-content white-text">
              <span className="card-title">{data.name}</span>
            </div>
            <div className="card-action">
            </div>
          </div>
        </div>
      )
    })
  )

  return (
    <div>
      <h1>Upcoming Events</h1>
      {display()}
    </div>);
};

export default Home;
