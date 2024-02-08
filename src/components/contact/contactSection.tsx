import React from 'react';
import styles from './styles.module.css';
import {ContactUsIcons} from "../../tools/tools";

//const discordInviteURL = "https://discord.gg/MfBkbGhKH2";
const discordInviteURL: string = "https://discord.gg/jg6E55rwQa";

const ContactSection = () => {
    return (
        <div className={styles.contactSection}>
            <h1>Contact Us</h1>
            <span>
            {/* discord icon */}
            <a href={discordInviteURL} target="_blank" rel="noreferrer">
                <img src={ContactUsIcons.DISCORD_LARGE} alt="discord logo"/>
            </a>
            {/*/!* email icon *!/*/}
            {/*<a href="#" target="_blank" rel="noreferrer">*/}
            {/*    <img src={ContactUsIcons.EMAIL_LARGE} alt="email logo"/>*/}
            {/*</a>*/}
            {/*/!* facebook icon *!/*/}
            {/*<a href="#" target="_blank" rel="noreferrer">*/}
            {/*    <img src={ContactUsIcons.FACEBOOK_LARGE} alt="facebook logo"/>*/}
            {/*</a>*/}
            {/*/!* twitter icon *!/*/}
            {/*<a href="#" target="_blank" rel="noreferrer">*/}
            {/*    <img src={ContactUsIcons.TWITTER_LARGE} alt="twitter logo"/>*/}
            {/*</a>*/}
            {/*/!* instagram icon *!/*/}
            {/*<a href="#" target="_blank" rel="noreferrer">*/}
            {/*    <img src={ContactUsIcons.INSTAGRAM_LARGE} alt="instagram logo"/>*/}
            {/*</a>*/}
        </span>
        </div>
    )
}

export default ContactSection;