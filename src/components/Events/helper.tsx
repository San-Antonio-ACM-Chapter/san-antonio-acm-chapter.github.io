import { format } from "date-fns";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { google, outlook, office365, yahoo, ics } from "calendar-link";
import styles from "./styles.module.css";
import { EventCardProps, EventItem } from "./types";

/**
 * Filter events based on whether they have happened relative to today 
 * @param {EventItem[]} eventList - list of all time events.
 * @returns An array of upcoming events.
 */
export const getUpcomingEvents = (eventList: EventItem[]): EventItem[] => {
    const currentDate = new Date();
    return eventList.filter(event => event.date.endDate > currentDate);
  }


/**
 * Formats the event date range with time zone indication.
 * @param {Date} start - Start date and time.
 * @param {Date} end - End date and time.
 * @returns A formatted string representing the event date range with time zone.
 */
export const formatEventDate = (start: Date, end: Date) => {

    const startDateFormat = "MMM do yyyy @ h:mmaaaaa";

    const formattedStartDate = format(start, startDateFormat);
    const formattedEndDate = format(end, 'h:mmaaaaa');

    const formattedEventDateString = `${formattedStartDate} - ${formattedEndDate} CST`;
    return formattedEventDateString
}

/**
 * Renders an "Add to Calendar" dropdown button component.
 * @param param - An object containing the event details.
 * @param param.title - The title of the event.
 * @param param.date - An object containing start and end date objects.
 * @param param.date.startDate - The start date of the event.
 * @param param.date.endDate - The end date of the event.
 * @param param.linkURL - The registration URL associated with the event.
 * @param param.linkText - The text associated with the event link.
 * to add description?? 
 * @returns JSX.Element
 */
export const AddToCalendar = ({ title, date, linkURL, linkText, }: EventCardProps) => {

    const event = {
        title: title,
        description: linkText + ' ' + linkURL,
        start: date.startDate.toISOString(),
        end: date.endDate.toISOString(),
    };

    return (
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle className={styles.addToCalendarButton}>Add to Calendar</Dropdown.Toggle>
            <Dropdown.Menu >
                <div className={styles.addToCalendarMenu}>
                    <Dropdown.Item className={styles.addToCalendarItem} target="_blank" href={google(event)}>Google</Dropdown.Item>
                    <Dropdown.Item className={styles.addToCalendarItem} target="_blank" href={ics(event)}>iCal</Dropdown.Item>
                    <Dropdown.Item className={styles.addToCalendarItem} target="_blank" href={outlook(event)}>Outlook</Dropdown.Item>
                    <Dropdown.Item className={styles.addToCalendarItem} target="_blank" href={yahoo(event)}>Yahoo</Dropdown.Item>
                    <Dropdown.Item className={styles.addToCalendarItem} target="_blank" href={office365(event)}>Office365</Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};
