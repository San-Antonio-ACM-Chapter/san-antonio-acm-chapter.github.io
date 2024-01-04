import React from 'react';
import './NavigationHeader.css';

const NavigationHeader = () => {
    return (
        <div className={"container"}>
            <h1>Software Engineering ACM San Antonio</h1>
            <a href={"#"}>Home</a>
            <a href={"#"}>About</a>
            <a href={"#"}>Projects</a>
            <a href={"#"}>Get Involved</a>
        </div>
    )
}

export default NavigationHeader;