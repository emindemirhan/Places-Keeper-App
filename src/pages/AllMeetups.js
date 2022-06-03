import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const AllMeetupsPage = () => {
  const [isLoading, setIsloading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsloading(true);
    const fetchData = fetch(
      "https://meetups-db-e4bc8-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsloading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    <section>
      <p>Place is loading</p>
    </section>;
  }

  return (
    <div>
      <h1>All Places</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetupsPage;
