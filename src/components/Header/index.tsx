import styles from './styles.module.css';
import NavigationLink from './navigationLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { useWindowDimensions } from '../../utils/hooks';

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

    return (
        <div className={styles.container}>
            <span className={styles.spanContainer}>
                <h2 className={styles.headerMainText}>
                    <NavigationLink href={"#home"} text={"ACM San Antonio"} />
                </h2>
                <span className={styles.linkContainer}>
                    <NavigationLink href={"#about"} text={"About"} />
                    <NavigationLink href={"#events"} text={"Events"} />
                    <NavigationLink href={"#membership"} text={"Membership"} />
                    <NavigationLink href={"#contact"} text={"Connect"} />
                </span>
                <span className={styles.mobileLinkContainer} onClick={() => setMobileMenu(!mobileMenu)}>
                    <FontAwesomeIcon icon={faBars} size="lg" className={styles.icon}/>
                </span>
            </span>

            <div className={styles.mobileLinks} style={{ display: mobileMenu ? 'flex' : 'none' }}>
                <NavigationLink href={"#about"} text={"About"} />
                <NavigationLink href={"#events"} text={"Events"} />
                <NavigationLink href={"#membership"} text={"Membership"} />
                <NavigationLink href={"#contact"} text={"Connect"} />
            </div>
        </div>
    );
}

export default Header;
