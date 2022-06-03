import React from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";




const NewMeetup = (props) => {
  
const titleRef= useRef();
const adressRef= useRef();
const imageRef = useRef();
const descriptionRef = useRef();
  
  
  const handleSubmit = (event) => {
    event.preventDefault();


    const enteredTitle = titleRef.current.value;
    const enteredİmage = imageRef.current.value;
    const enteredAddress = adressRef.current.value;
    const enteredDescription = descriptionRef.current.value;
     
    const formData = {
      title: enteredTitle,
      image: enteredİmage,
      address: enteredAddress,
      description: enteredDescription
    }
    
  props.addOnMeetup(formData);
  
  
  }
  


  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Place Title</label>
          <input
            ref={titleRef}
            type="text"
            required
            id="title"
            placeholder="Please Add a Title"
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">İmage of Place</label>
          <input
          ref={imageRef}
            type="url"
            required
            id="image"
            placeholder="Please Add a İmage"
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="adress">Adress of Place</label>
          <input
            ref={adressRef}
            type="text"
            required
            id="adress"
            placeholder="Please Add a Adress"
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description Place</label>
          <textarea ref={descriptionRef} id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add a Place</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetup;
