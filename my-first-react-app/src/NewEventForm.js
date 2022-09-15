import './NewEventForm.css'
import { useState, useRef} from 'react'

export default function NewEventForm({newEvent}) {
    // const [title, setTitle]= useState('')
    // const [date, setDate] = useState('')
    const title = useRef()
    const date = useRef()
    const location = useRef()

    // const handleChange = (e)=>{
    // setTitle(e.target.value)
    // }
    const resetForm = ()=>{
    // setTitle('') 
    // setDate('')   
    title.current.value = ''
    date.current.value = ''
    }

    const handleSubmit = (e)=>{

        e.preventDefault()
        const even ={
            title: title.current.value,
            date: date.current.value,
            location: location.current.value,
            id: Math.floor(Math.random() * 10)
        }
       newEvent(even)
       resetForm()
    }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
    <label>
        <span>Event Title:</span>
        <input 
        type="text" 
        ref={title}
        // onChange={(e)=> setTitle(e.target.value)} 
        // value={title}
        />
    </label>
    <label>
        <span>Event Date:</span>
        <input 
        type="date" 
        ref={date}
        // onChange={(e)=> setDate(e.target.value)} 
        // value={date}
        />
    </label>
    <label>
        <span>Event Location: </span>
        <select ref={location}>
        <option value="monaco">Monaco</option>
        <option value="paris">Paris</option>
        <option value="lens">Lens</option>
        <option value="lyon">Lyon</option>
        </select>
    </label>
    <button>Submit</button>
    
    </form>
  )
}
