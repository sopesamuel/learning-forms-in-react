import React, {useState} from 'react'
import './App.css';
import Title from './Title'
import Modal from './Modal'
import Event from './EventList'
import NewEventForm from './NewEventForm';

function App() {
const [showModal, setShowModal] = useState(true)
const [showEvents, setShowEvents] = useState(true) 
const [events, setEvents] = useState([])

const newEvent = (event)=>{
  setEvents((prevEvents)=>{
    return [...prevEvents, event ]
  })
  setShowModal(false)
}

const handleClick = (id) => {
   setEvents((prevEvents)=>{
    return prevEvents.filter((event)=>  id !== event.id )
   })
  }
  



  return (
    <div className="App">
    <button onClick={()=>setShowModal(true)}>Show Modal</button> 
    <Title title="Events in your Area" subTitle="All the latest events in MarioLand"/>
    {!showEvents && <button onClick={()=> setShowEvents(true)}>Show Events</button>}
    {showEvents && <button onClick={()=> setShowEvents(false)}>Hide Events</button>}
    {showEvents && <Event event={events}  handleClick={handleClick}/>}

    {showModal && <Modal>
      <NewEventForm newEvent={newEvent}/>
      </Modal>}
     
    </div>
  );
}

export default App;
