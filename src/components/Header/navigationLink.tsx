// Code Written By: Jonathan Gene Tigner
import React, { AnchorHTMLAttributes, ClassAttributes } from 'react';
import styles from './styles.module.css';

interface NavigationLinkProps {
    href: string;
    text: string;
    otherAttributes?: ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>;
}

/**
 * NavigationLink component
 * @param props - the properties of the component
 * @constructor - the component
 */
const NavigationLink = (props: NavigationLinkProps) => {
    return ( <a className={styles.link} href={props.href} {...props.otherAttributes}>{props.text}</a> );
}

export default NavigationLink;