import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>LZfD Technologieradar</h1> 
            {/* add links to other sections */}
            <Link style={linkStyle} to="/"> Home </Link> 
            <Link style={linkStyle} to="/"> About </Link>
            {/* <Link style={linkStyle} to="/about"></Link> */}
        </header>
    )
}

const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}

const linkStyle = {
    textDecoration: "none",
    color: "black",
    marginLeft: "10px", // 10px space to the left
    marginRight: "10px" // 10px space to the right
    // change color when clicked
    // remove underline
    // change cursor on hover
    // 
}


// Add link styling after completion

export default Header