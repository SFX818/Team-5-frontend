import React from 'react'

const Event = () => {
    return (
        <div key={i} className="col s6">
            <div id="all-info" className="card-panel teal lighten-2">
                <div className="card-content white-text">
                    <span className="card-title">{data.name}</span>
                </div>
                <div className="card-action">
                    <Link className="more" to={{
                        pathname: `/events/${i}`,
                        state: { data }
                    }}
                        key={data.name}
                    >
                        More Information
                            </Link>
                </div>
            </div>
        </div>
    )
}

export default Event
