import styles from './styles.module.css';
import { ContactUsIcons } from "../../tools/tools";
import meetupLogo from "../../assets/icons-and-logos/Meetup_Logo.png";
import { socials } from "../../utils/Constants";
import SocialLink from '../SocialLink';

//const discordInviteURL = "https://discord.gg/MfBkbGhKH2";
const discordInviteURL: string = "https://discord.gg/jg6E55rwQa";
const meetupPageURL: string = "https://www.meetup.com/acm-sa/";

const Contact = () => {
    return (
        <footer className={styles.contact}>
            <div className={styles.contactSection}>
                <h1>Connect With Us</h1>
                <div className={styles.socialMediaContainer}>
                    {/* discord icon */}
                    <a href={discordInviteURL} target="_blank" rel="noreferrer">
                        <img src={socials?.discord?.logo} alt="discord logo" />
                    </a>
                    <SocialLink
                        link={socials?.instagram?.url}
                        src={ContactUsIcons.INSTAGRAM}
                        title={socials?.instagram?.title}
                    />
                    <SocialLink
                        link={socials?.linkedin?.url}
                        src={ContactUsIcons.LINKEDIN}
                        title={socials?.linkedin?.title}
                    />
                    <a href={meetupPageURL} target="_blank" rel="noreferrer">
                        <img src={meetupLogo} alt="meetup logo" />
                    </a>
                </div>
            </div>
            <div className={styles.simpleContact}>
                <p>
                    2025 nonprofit
                    &#8226;
                    <a href='mailto:team@acmsa.org'>team@acmsa.org</a>
                </p>
            </div>
        </footer>
    )
}

export default Contact;