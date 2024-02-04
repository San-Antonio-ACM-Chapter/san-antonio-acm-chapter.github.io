import React from 'react';
import styles from './styles.module.css';

const EventsSection = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.containerHeader}>Events</h1>
            <p className={styles.containerParagraph}><em>
                The ACM of San Antonio hosts events to help you connect, learn, and grow. Our events are designed to help you expand your professional circle, master cutting-edge technologies, and learn about other options available to you on the market. Collaborate with others looking to build projects, practice mock interviews and much more!</em>
            </p>
        </div>
    );
}

export default EventsSection;