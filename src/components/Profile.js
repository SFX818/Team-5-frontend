import React from 'react'
import AuthService from '../services/auth.service'
import { Link } from 'react-router-dom'

const Profile = () => {
    const currentUser = AuthService.getCurrentUser()

    return (
        <div className="card" style={{width: "18rem;"}}>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
            className="img-thumbnail mb-1" 
            width="100%"
            style={{maxWidth: "100px"}}
          />
            <div className="card-body">
                <h5 className="card-title">{currentUser.username}</h5>
                <p className="card-text"> </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">  <strong>ID:</strong> {currentUser.id}</li>
                <li className="list-group-item"><strong>Email:</strong> {currentUser.email}</li>
                {currentUser.roles && currentUser.roles.map((role, index) => 
                    <li key={index} className="list-group-item">
                        <strong>ROLE:</strong> {role}
                    </li>
                )}
            </ul>
            <div className="card-body justify-content-end">
            <Link 
                to={{
                  pathname: `/`,
                  
                }} 
                className="card-link text-end"
              >
              HOME
              </Link>
            </div>
        </div>
    )
}




export default Profile