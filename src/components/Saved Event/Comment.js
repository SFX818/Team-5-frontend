import React from 'react'

const Comment = ({key, name, content}) => {

    return (
      <div className="container">
        <p>Event: {event.name} </p>
        <p>date: {event.date} </p>
        <p>eventId: {event.eventId}</p>
        <p>location: {event.location}</p>
        __v: {event._v}/_id: {event._id}

        <Link 
                to={{
                  pathname: `/events/comment/${comment._id}`,
                  state: { data }
                }}
                key={data.name}
              >
                More Information
              </Link>
        
      </div>
    );
};
  
export default Comment;
  