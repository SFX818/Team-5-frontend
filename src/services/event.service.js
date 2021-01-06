import axios from 'axios'
import authHeader from '../utilities/authHeader.utilities'
const API_URL = "http://localhost:8080/"

// function to save a new Event
export const save = (eventId, name, date, location) => {

    let authHeaderResponse= authHeader()
    console.log(authHeaderResponse)
    axios.post(API_URL + 'profile/myevents/addevent', {

        eventId,
        name,
        date,
        location
    },
        { headers: authHeader() }).then(
            ((res) => {
                // res({ message: "event successfully saved to database" })
                return res.data
            })
        )
}


// pull events from local database
export const seeEvent = (eventId, name, date, location) => {
    return axios.get(API_URL + 'profile/myevents/', {

    })
}

export const deleteEvent = (eventId, name, date, location) => {
    return axios.delete(API_URL + 'profile/myevents/addevent', {
        eventId,
        name,
        date,
        location
    }, { header: authHeader() })
}


export const deleteComment = (name, content) => {
    return axios.delete(API_URL + 'profile/myevents/addevent', {
        name,
        content
    }, { header: authHeader() })
}
