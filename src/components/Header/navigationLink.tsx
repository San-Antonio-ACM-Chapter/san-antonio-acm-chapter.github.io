// Code Written By: Jonathan Gene Tigner
import React from 'react';
import styles from './styles.module.css';

interface NavigationLinkProps {
    href: string;
    text: string;
}

/**
 * NavigationLink component
 * @param props - the properties of the component
 * @constructor - the component
 */
const NavigationLink = (props: NavigationLinkProps) => {
    return ( <a className={styles.link} href={props.href}>{props.text}</a> );
}

export default NavigationLink;