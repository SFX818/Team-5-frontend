import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

  const [eventData, setEventData] = useState([])

  useEffect(() => {
    axios.get("https://app.ticketmaster.com/discovery/v2/events.json?apikey=0wQvZLMQGzPOHkz1uaAlvIfQ8NQt8ZDe&size=20&postalCode=10001")
      .then((res) => {
        setEventData(res.data._embedded.events)
      })
  }, [])

  const display = () => (
    eventData.map((data, i) => {
      return (
        <div className="col-6 col-md-4">
          <div className="card">
            <img src={data.images[6].url} className="card-img-top" alt="Eagles Group"></img>
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data._embedded.venues[0].name}<br></br><span>{data.dates.start.localDate}</span></p>
              <Link 
                to={{
                  pathname: `/events/${data.id}`,
                  state: { data }
                }}
                key={data.name}
              >
                More Information
              </Link>
            </div>
          </div>
        </div>
      )
    })
  )

  return (
    <div className="container">
      <div className="row">
        <h1>Upcoming Events</h1>
        {display()}
      </div>
    </div>
  );
};

export default Home;
