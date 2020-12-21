import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <img src={"ofd.jpg"} alt="ofd-logo" style={ofd_logo_style}></img>
            <img src={"lzfd.jpg"} alt="lzfd-logo" style={lzfd_logo_style}></img>
            <h1>LZfD Technologieradar</h1> 
            {/* add links to other sections */}
            <Link style={linkStyle} to="/"> Hauptseite </Link> 
            <Link style={linkStyle} to="/"> Inhaltsverzeichnis </Link>
            <Link style={linkStyle} to="/"> Impressum </Link>
            {/* <Link style={linkStyle} to="/about"></Link> */}
        </header>
    )
}

const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    textColor: "black"
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

const ofd_logo_style = {
    borderRadius: "8px",
    float: "left",
    padding: "8px",
    marginTop: "20px",
    marginLeft: "20px",
    align: "middle"
}

const lzfd_logo_style = {
    borderRadius: "8px",
    float: "right",
    padding: "8px",
    marginTop: "20px",
    marginRight: "20px"
}

// Add link styling after completion

export default Header