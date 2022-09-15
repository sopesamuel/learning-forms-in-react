import React from "react"

export default function EventList({event, handleClick}) {
  return (
  <div>
   {event.map((event)=>(
    <React.Fragment key={event.id}>
    <h1>{event.id} - {event.title}</h1>
    <p>{event.location}- {event.date}</p>
    <button onClick={()=> handleClick(event.id)}>Delete event</button>
    </React.Fragment>
    ))}
    </div>
  )
}
