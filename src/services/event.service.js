import axios from 'axios'
import authHeader from '../utilities/authHeader.utilities'
const API_URL = "http://localhost:8080/"

// function to save a new Event
export const save = (eventId, name, date, location) => {
    console.log(eventId, name, date, location)
    console.log('TRYING TO SAVE AND SEND TO BACKEND')
    const token = localStorage.getItem("user")
    // const token = JSON.parse(localStorage.getItem("user"))
    let accessToken = JSON.parse(token).accessToken
    console.log(JSON.parse(accessToken))
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

export const deleteEvent = (eventId, name, date, location) => {
    return axios.delete(API_URL + 'profile/myevents/addevent', {
        eventId,
        name,
        date,
        location
    }, {header: authHeader()})
}


export const deleteComment = (name, content) => {
    return axios.delete(API_URL + 'profile/myevents/addevent', {
        name, 
        content
    }, {header: authHeader()})
}





