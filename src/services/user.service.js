import axios from 'axios'
import authHeader from '../utilities/authHeader.utilities'
require('dotenv').config();
 

//const DB_URL = 'http://localhost:8080/api/test'
var DB_URL 
{process.env.NODE_ENV === 'development' ? DB_URL=process.env.REACT_APP_DEV_URL_USER : DB_URL=process.env.REACT_APP_PRO_URL_USER}

// Methods	| Urls | Actions
// -------- | ------- | --------
// POST |	/api/auth/signup |	signup new account
// POST |	/api/auth/signin |	login an account
// GET	 |   /api/test/all	 |	retrieve public content
// GET	 |  /api/test/user	 |	access User's content
// GET	 | /api/test/admin	 |	access Admins content

// retrive all public content
const getPublicContent = () => {
    return axios.get(DB_URL + 'all')
}

// access User's content
const getUserBoard = () => {
    // include grabbing the header so that we can get their accessToken using the authHeader function in our helper
    // this will determine what they see based on the accessToken
    return axios.get(DB_URL + 'user', {headers: authHeader()})
}

// access admin content
const getAdminBoard = () => {
     // include grabbing the header so that we can get their accessToken using the authHeader function in our helper
     // this will determine what they see based on the accessToken
    return axios.get(DB_URL + 'admin', {headers: authHeader()})
}

//you can export all the functions at once using this object functionality
export default {
    getPublicContent,
    getUserBoard,
    getAdminBoard
}