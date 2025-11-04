import styles from './styles.module.css';
import NavigationLink from './NavigationLink/NavigationLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { useWindowDimensions } from '../../utils/hooks';

const navigationItems = ["About", "Events", "Membership", "Connect"]

const Header = () => {
    // Hooks
    const [mobileMenu, setMobileMenu] = useState(false);
    const { width } = useWindowDimensions();

    // Handlers
    useEffect(() => {
        if (width > 850) {
            setMobileMenu(false);
        }
    }, [width])

    // Links for desktop and mobile navigation
    const navigationLinks = navigationItems.map((link,index) =>
        <NavigationLink
            key={link+index.toString()}
            otherAttributes={{ onClick: () => setMobileMenu(false)}}
            href={`#${link.toLowerCase()}`}
            text={link}
        />
    )
    const isMobileClosed = mobileMenu ? null : styles.closed

    return (
        <div className={styles.container}>
            <span className={styles.spanContainer}>
                <h2 className={styles.headerMainText}>
                    <NavigationLink href={"#home"} text={"ACM San Antonio"} />
                </h2>
                <span className={styles.linkContainer}>
                    {navigationLinks}
                </span>
                <span className={styles.mobileLinkContainer} onClick={() => setMobileMenu(!mobileMenu)}>
                    <FontAwesomeIcon icon={faBars} size="lg" className={styles.icon}/>
                </span>
            </span>

            <div className={`${styles.mobileLinks} ${isMobileClosed}`}>
                {navigationLinks}
            </div>
        </div>
    );
}

export default Header;
