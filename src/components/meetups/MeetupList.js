import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  
  
  
    return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
    key={meetup.id}
    title={meetup.title}
    id={meetup.id}
    image={meetup.image}
    address={meetup.address}
    description={meetup.description}
    meetups={meetup}
  />
      ))}
    </ul>
  );
};

export default MeetupList;
