import axios from 'axios'

const API_URL = "http://localhost:8080/"

// function to save a new Event
export const save = (eventId, name, date, location) => {
    return axios.post(API_URL + 'profile/events/addevent', {
        eventId,
        name,
        date,
        location
    })
}

