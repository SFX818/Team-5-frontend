import axios from 'axios'
import authHeader from '../utilities/authHeader.utilities'


const API_URL = "http://localhost:8080/"

// function to save a new Event
export const save = (eventId, name, date, location) => {
    
    // console.log(eventId, name, date, location)
    console.log('TRYING TO SAVE AND SEND TO BACKEND')
    return axios.post(API_URL + 'profile/myevents/addevent', {
        eventId,
        name,
        date,
        location
    }, {headers: authHeader()})
}


// pull events from local database
export const seeEvent = (eventId, name, date, location) => {
    return axios.get(API_URL + 'profile/myevents/')

}



export const deleteEvent = (eventId) => {
    console.log(eventId)
    axios.delete(API_URL + 'profile/myevents/'+ eventId, {
        eventId: eventId 
    }, {headers: authHeader()}).then ((res)=>{
        return res
    })
}


export const deleteComment = (name, content, id) => {
    return axios.delete(API_URL + '/events/comment/' + id, {
        name,
        content
    }, {headers: authHeader()})
}

export const updateComment = ( name, content, commentId) => {
    return axios.put(API_URL + '/events/updatedcomment/' + commentId, { // id is the id of the comment
        name,
        content
    }, { header: authHeader() })
}
