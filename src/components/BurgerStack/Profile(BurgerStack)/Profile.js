import React, { useState, useEffect } from 'react'
import AuthService from '../../../services/auth.service'
import CalendarStack from '../Profile(BurgerStack)/CalendarStack'

const Profile = () => {
    
    // useEffect(() => {
        const currentUser = AuthService.getCurrentUser()

        // if (user) {
        //     setCurrentUser(user);
        //    }
        // }, [])

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong>
                </h3>
            </header>
            <p>
                <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}...{" "}
            </p>
            <p>
                <strong>ID:</strong> {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            {/* if current user has roles then map through those roles */}
            {currentUser.roles && 
                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)
                }
            < CalendarStack user= {currentUser}/>
        </div>
    )
}

export default Profile