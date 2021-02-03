import axios from 'axios'
import { setItem, getItem, removeItem } from '../utilities/localStorage.utilities'
require('dotenv').config();

<<<<<<< HEAD
//const API_URL = "http://localhost:8080/api/auth/"
var API_URL
{process.env.NODE_ENV === 'development' ? API_URL
=process.env.REACT_APP_DEV_URL_AUTH : API_URL
=process.env.REACT_APP_PRO_URL_AUTH}
=======
const API_URL = "https://thawing-tundra-73111.herokuapp.com/api/auth/"
>>>>>>> 443e884657b3c87ea5129573486120fb2d3d5370

// function to register a new User
const signup = (username, email, password) => {
    return axios.post(API_URL + 'signup', {
        username,
        email,
        password
    })
}

// login the User
const login = (username, password) => {
    return axios.post(API_URL + 'signin', {
        username,
        password
    })
    .then((response) => {
        // Check if the response of the user has accessToken
        if(response.data.accessToken) {
            setItem('user', response.data)
        }
        return response.data
    })
}

// Logout the User (remove all data)
const logOut = () => {
    removeItem('user')
}

//get the current user
const getCurrentUser = () => {
    return getItem('user')
}

export default {
    signup,
    login,
    logOut,
    getCurrentUser
}

