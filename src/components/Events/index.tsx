import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { loremIpsum } from "../../tools/tools";

import { AddToCalendar, formatEventDate, getUpcomingEvents } from "./helper";
import { fromZonedTime } from "date-fns-tz"
import { EventCardProps, EventItem } from "./types";

const Events = () => {
  const EVENT_TEXT: string =
    "ACM San Antonio hosts a variety of events, from technical workshops to social gatherings. We are always looking for new ways to engage with our community. If you have an idea for an event, please reach out to us!";

  const [eventItems, setEventItems] = useState([] as EventItem[]);
  const timezone = 'America/Chicago'

  const initialEventItems = [
    {
      title: "What is a Software Engineer?",
      date: {
        startDate: fromZonedTime(new Date(2024, 1, 28, 18), timezone),   // Feb 28 2024 at 6pm
        endDate: fromZonedTime(new Date(2024, 1, 28, 20), timezone)      // Feb 28 2024 at 8pm 
      },
      linkURL: "https://www.meetup.com/acm-sa/events/299230919/",
      linkText: "RSVP",
    },
    {
      title: "Intermediate React Native Workshop",
      date: {
        startDate: fromZonedTime(new Date(2024, 3, 24, 18), timezone),  // Apr 24 2024 at 6pm
        endDate: fromZonedTime(new Date(2024, 3, 24, 20), timezone)     // Apr 24 2024 at 8pm 
      },
      linkURL: "https://www.meetup.com/acm-sa/events/300140253/",
      linkText: "RSVP",
    },
  ];


  useEffect(() => {
    //TODO: eventually this needs to come from some sort of backend connection
    console.log("hit");
    setEventItems(initialEventItems);
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

  const upcomingEvents = getUpcomingEvents(eventItems)
  const eventsTitle = upcomingEvents.length > 0 ? `Upcoming Events` : `Previous Events`             // based on filtered events list, set title 
  const eventList: EventItem[] = eventsTitle === "Previous Events" ? eventItems : upcomingEvents    // based on title, return correct events list, upcoming events or all previous events
  eventList.sort((a, b) => b.date.endDate.getTime() - a.date.endDate.getTime());                    // Sort the eventList array by the end date in descending order (most recent date first)


  return (
    <div className={styles.container}>
      <h1 className={styles.containerHeader}>Events</h1>
      <div className={styles.eventContent}>
        <p className={styles.containerParagraph}>
          <em>{EVENT_TEXT}</em>
        </p>
        <div className={styles.upcomingEvents}>
          <h2 className={styles.upcomingEventsHeader}>
            Upcoming Events
          </h2>
          <div>
            <iframe
              src="https://lu.ma/embed/calendar/cal-Cq7Sb2LfXZLQf20/events?compact=true&lt=light"
              aria-hidden="false"
              title="Luma ACM San Antonio Calendar"
              className={styles.lumaCalendar}
            ></iframe>
          </div>
        </div>
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

export default Events;