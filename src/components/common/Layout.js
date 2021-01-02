import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import axios from 'axios'

const Layout = (props) => {

    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined)
    const [search, setSearch] = useState("")

    useEffect(() => {
        // grab getCurrentUser from the auth service
        const user = AuthService.getCurrentUser()
        console.log(user)

        if (user) {
            //setCurrentUser to the current user state
            setCurrentUser(user);
            //check if the user roles includes admin; return either true or false
            setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
        }
        //empty array is a listener - everytime we want something to change, we have this listener
        // the listener is empty when there's not any prerequisite to listen to
    }, [])

    const logOut = () => {
        AuthService.logOut()
    }

    // Store the username in our username state
    const onChangeSearch = (e) => {
        const search = e.target.value
        console.log(search)
        setSearch(search)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${search}&source=universe&countryCode=US&apikey=${process.env.API_KEY}`)
        .then((res)=>{
            console.log(res.data)//._embedded.events)
        })
    }

    return (
        <div>
            <nav className='navbar navbar-expand navbar-light bg-light'>
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'>
                        Cool Site
                </Link>
                    <div className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link to={'/home'} className='nav-link'>
                                Home
                        </Link>
                        </li>
                        {/* && says if showAdminboard is true, then show this link item
                        {showAdminBoard && (
                            <li className='nav-item'>
                                <Link to={'/admin'} className='nav-link'>
                                    Admin Board
                            </Link>
                            </li>
                        )}

                        {currentUser && (
                            <li className='nav-item'>
                                <Link to={'/user'} className='nav-link'>
                                    User Profile
                            </Link>
                            </li>
                        )} */}
                        <form onSubmit={handleSearch} className="search-form">
                            <label htmlFor="search" className="screen-reader-text"></label>
                            <input id="search" type="search" className="search-input" onChange={onChangeSearch} placeholder="Search New Event"></input>
                            <button className="search-button">Search</button>
                        </form>
                    </div>

                    {currentUser ?
                        <div className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link to={'/profile'}>
                                    {currentUser.username}
                                </Link>
                                <a href='/login' className='nav-item nav-link block' onClick={logOut}>Logout</a>
                            </li>
                        </div> :
                        <div className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link to={'/login'} className='nav-link'>
                                    Login
                            </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to={'/register'} className='nav-link'>
                                    Sign Up
                            </Link>
                            </li>
                        </div>

                    }
                </div>
            </nav>
            <div className='container mt-3'>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
