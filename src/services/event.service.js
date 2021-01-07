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
    }, { headers: authHeader() })
}


// pull events from local database
export const seeEvent = (eventId, name, date, location) => {
    return axios.get(API_URL + 'profile/myevents/')

}


// function to delete an Event
export const deleteEvent = (eventId, name, date, location) => {
    console.log(eventId)
    return axios.delete(API_URL + `profile/myevents/${eventId}`, {
        eventId,
        name,
        date,
        location
    }, 
    { headers: authHeader() })
}


export const deleteComment = (name, content) => {
    return axios.delete(API_URL + 'profile/myevents/addevent', {
        name,
        content
    }, { headers: authHeader() })
}
