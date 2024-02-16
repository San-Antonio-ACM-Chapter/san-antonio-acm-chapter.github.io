import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {loremIpsum} from "../../tools/tools";

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

    return loremIpsum.slice(startNumber,endNumber);
}

interface EventItem {
    title: string;
    date: string;
    linkURL: string;
    linkText: string;
}

const EventsSection = () => {
    const EVENT_TEXT : string = "ACM San Antonio hosts a variety of events, from technical workshops to social gatherings. We are always looking for new ways to engage with our community. If you have an idea for an event, please reach out to us!";

    const [eventItems, setEventItems] = React.useState([] as EventItem[]);

    // @ts-ignore
    React.useEffect(() => {
        //TODO: eventually this needs to come from some sort of backend connection
        console.log("hit");
        setEventItems([
            {
                title: "What is a Software Engineer?",
                date: "Feb 28th 2024 @ 6-8pm CST",
                linkURL: "https://www.meetup.com/acmsa-devsa/",
                linkText: "RSVP HERE!"
            }
        ])
    }, [])


    /**
     * This function takes an array of event items and returns an array of Event components
     * @param eventItems
     */
    const generateEventItems = (eventItems: EventItem[]) => {
        return eventItems.map((eventItem: EventItem) => {
            return (
                <Event
                    title={eventItem.title}
                    date={eventItem.date}
                    linkURL={eventItem.linkURL}
                    linkText={eventItem.linkText}
                />
            )
        })
    }

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
}

//event props
interface EventProps {
    title: string;
    date: string;
    linkURL: string;
    linkText: string;
}

/**
 * Event component
 * @param props - an object containing the event's title, date, linkURL, and linkText
 * @constructor - a component that displays an event's title, date, and a link to RSVP
 */
const Event = (props: EventProps) => {
    return (
        <div className={styles.event}>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <a href={props.linkURL}>{props.linkText}</a>
        </div>
    )
}

export default EventsSection;