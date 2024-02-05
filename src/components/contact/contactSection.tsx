import React from 'react';

import styles from './styles.module.css';

const discordInviteURL = "https://discord.gg/MfBkbGhKH2";

const ContactSection = () => {
    return (
        <div className={styles.contactSection}>
            <h1>Contact Us</h1>
            <span>
            {/* discord icon */}
            <a href={discordInviteURL} target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/color/48/000000/discord-logo.png" alt="discord logo"/>
            </a>
            {/* email icon */}
            <a href="#" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="email logo"/>
            </a>
            {/* facebook icon */}
            <a href="#" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook logo"/>
            </a>
            {/* twitter icon */}
            <a href="#" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter logo"/>
            </a>
            {/* instagram icon */}
            <a href="#" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram logo"/>
            </a>
        </span>
        </div>
    )
}

export default ContactSection;