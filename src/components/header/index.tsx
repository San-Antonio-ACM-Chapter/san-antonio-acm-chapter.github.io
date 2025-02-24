import React from 'react';
import styles from './styles.module.css';
import NavigationLink from './navigationLink';
const Header = () => {
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
            </span>
        </div>
    );
}

export default Header;
