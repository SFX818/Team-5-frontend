import axios from 'axios'
import authHeader from '../utilities/authHeader.utilities'

const API_URL = "http://localhost:8080/"

// function to save a new Event
const save = (eventId, name, date, location) => {
    return axios.post(API_URL + 'profile/myevents/addevent', {
        eventId,
        name,
        date,
        location
    }, {header: authHeader()})
}

const userEvent = () => {
    axios.get(API_URL+'profile/myevents', {header: authHeader()} )
}

const eventWithComment = () => {
    return axios.get(API_URL+'events/comments/:id', {header: authHeader()} )
}

export default {
    save,
    userEvent,
    eventWithComment
}






