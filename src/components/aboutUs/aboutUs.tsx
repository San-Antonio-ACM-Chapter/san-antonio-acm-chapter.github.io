import React from 'react';
import styles from './styles.module.css';

const aboutUsText: string = "ACM of San Antonio is a vibrant network of passionate individuals ready to connect, collaborate, and push the boundaries of San Antonio's tech scene. Expand your professional circle through engaging meetups, social gatherings and mock industry conferences. Master cutting-edge technologies and learn about other options available to a person like you on the market. Collaborate with others looking to build projects, practice mock interviews and much more!\n";

/**
 * This function returns the about us section of the website
 * @constructor - returns the about us section of the website
 */
const AboutUsSection = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.containerHeader}>About Us</h1>
            <div className={styles.containerParagraph}>
                <em>{aboutUsText}</em>
            </div>
        </div>
    );
}

export default AboutUsSection;