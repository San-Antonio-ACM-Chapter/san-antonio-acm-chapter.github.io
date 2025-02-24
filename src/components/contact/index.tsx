import styles from './styles.module.css';
import { ContactUsIcons } from "../../tools/tools";
import meetupLogo from "../../assets/icons-and-logos/Meetup_Logo.png";

//const discordInviteURL = "https://discord.gg/MfBkbGhKH2";
const discordInviteURL: string = "https://discord.gg/jg6E55rwQa";
const meetupPageURL: string = "https://www.meetup.com/acm-sa/";

const Contact = () => {
    return (
        <div className={styles.contactSection}>
            <h1>Connect With Us</h1>
            <div className={styles.socialMediaContainer}>
                {/* discord icon */}
                <a href={discordInviteURL} target="_blank" rel="noreferrer">
                    <img src={ContactUsIcons.DISCORD_LARGE} alt="discord logo" />
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
                <a href={meetupPageURL} target="_blank" rel="noreferrer">
                    <img src={meetupLogo} alt="meetup logo" />
                </a>
            </div>
        </div>
    )
}

export default Contact;