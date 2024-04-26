import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { loremIpsum } from "../../tools/tools";

import { AddToCalendar, formatEventDate } from "./helper";
import { fromZonedTime } from "date-fns-tz"
import { EventCardProps, EventItem } from "./types";

const EventsSection = () => {
  const EVENT_TEXT: string =
    "ACM San Antonio hosts a variety of events, from technical workshops to social gatherings. We are always looking for new ways to engage with our community. If you have an idea for an event, please reach out to us!";

  const [eventItems, setEventItems] = useState([] as EventItem[]);
  const timezone = 'America/Chicago'
  
  useEffect(() => {
    //TODO: eventually this needs to come from some sort of backend connection
    console.log("hit");
    setEventItems([
      {
        title: "What is a Software Engineer?",
        date: {
          startDate: fromZonedTime(new Date(2024, 1, 28, 18), timezone), // Feb 28 2024 at 6pm
          endDate: fromZonedTime(new Date(2024, 1, 28, 20), timezone) // Feb 28 2024 at 8pm 
        },
        linkURL: "https://www.meetup.com/acmsa-devsa/",
        linkText: "RSVP HERE!",
      },
    ]);
  }, []);

  /**
   * This function takes an array of event items and returns an array of Event components
   * @param eventItems
   */
  const generateEventItems = (eventItems: EventItem[]) => {
    return eventItems.map((eventItem: EventItem) => {
      return (
        <EventCard
          title={eventItem.title}
          date={eventItem.date}
          linkURL={eventItem.linkURL}
          linkText={eventItem.linkText}
        />
      );
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.containerHeader}>Events</h1>
      <p className={styles.containerParagraph}>
        <em>{EVENT_TEXT}</em>
      </p>
      <div className={styles.upcomingEvents}>
        <h2 className={styles.upcomingEventsHeader}>Upcoming Events</h2>
        {generateEventItems(eventItems)}
      </div>
    </div>
  );
};

/**
 * Event component
 * @param props - an object containing the event's title, date, linkURL, and linkText
 * @constructor - a component that displays an event's title, date, and a link to RSVP
 */
const EventCard = (props: EventCardProps) => {
  const date = formatEventDate(props.date.startDate, props.date.endDate)
  return (
    <div className={styles.event}>
      <h3>{props.title}</h3>
      <p>{date}</p>
      <div className={styles.eventLinks}>
        <a href={props.linkURL}>{props.linkText}</a>
        <AddToCalendar title={props.title} date={props.date} linkURL={props.linkURL} linkText={props.linkText} />
      </div>
    </div>
  );
};

export default EventsSection;




/**
 * This function takes a string and slices it at two random points, returning the sliced string
 * @param loremIpsum - a string of lorem ipsum text
 */
const loremIpsumSlicer = (loremIpsum: string) => {
  //grab two random numbers based on the length of the loremIpsum string
  const randomNumberOne = Math.floor(Math.random() * loremIpsum.length);
  const randomNumberTwo = Math.floor(Math.random() * loremIpsum.length);

  //use the random numbers to slice the loremIpsum string, using the smaller number as the start and the larger number as the end
  const startNumber = Math.min(randomNumberOne, randomNumberTwo);
  const endNumber = Math.max(randomNumberOne, randomNumberTwo);

  return loremIpsum.slice(startNumber, endNumber);
};