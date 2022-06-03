import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useNavigate } from "react-router-dom"

const NewMeetupsPage = () => {
   const navigate = useNavigate()
  
  
  const fetchData= (formData) => {
fetch("https://meetups-db-e4bc8-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",

{
  method: "POST",
  body: JSON.stringify(formData),
  headers: {
    "Content-Type": "application/json"
  }
}

).then(()=>{
  navigate("/")
})
   }
  
  
  return (
    <section>
 <h1>Add a new Place</h1>
   <NewMeetupForm addOnMeetup={fetchData} />

    </section>
  )
}

export default NewMeetupsPage