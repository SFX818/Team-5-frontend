import axios from 'axios'
import authHeader from '../utilities/authHeader.utilities'

const API_URL = "http://localhost:8080/"

// function to save a new Event
export const save = (eventId, name, date, location) => {
    return axios.post(API_URL + 'profile/myevents/addevent', {
        eventId,
        name,
        date,
        location
    }, {header: authHeader()})
}


// pull events from local database
export const seeEvent = (eventId, name, date, location) => {
    return axios.get(API_URL + 'profile/myevents/addevent', {
       
    })
}
