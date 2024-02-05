import React from 'react';
import styles from './styles.module.css';
import {start} from "node:repl";

const loremIpsum = "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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

const EventsSection = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.containerHeader}>Events</h1>
            <p className={styles.containerParagraph}><em>
                The ACM of San Antonio hosts events to help you connect, learn, and grow. Our events are designed to help you expand your professional circle, master cutting-edge technologies, and learn about other options available to you on the market. Collaborate with others looking to build projects, practice mock interviews and much more!</em>
            </p>
            <div className={styles.upcomingEvents}>
                <h2 className={styles.upcomingEventsHeader}>Upcoming Events</h2>
                <div className={styles.event}>
                    <h3>{loremIpsumSlicer(loremIpsum)}</h3>
                    <p>{loremIpsum}</p>
                </div>
                <div className={styles.event}>
                    <h3>{loremIpsumSlicer(loremIpsum)}</h3>
                    <p>{loremIpsum}</p>
                </div>
            </div>
        </div>
    );
}

export default EventsSection;