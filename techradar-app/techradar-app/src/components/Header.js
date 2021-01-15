import React from 'react';

// import logo_ofd from './img/ofd.jpg';

function Header() {
    return (
        <header style={headerStyle}>
            {/* <img src={logo_ofd} alt="ofd-logo" style={ofd_logo_style}></img>
            <img src={"lzfd.jpg"} alt="lzfd-logo" style={lzfd_logo_style}></img> */}
            <h1 style={h1style}>LZfD Technologieradar</h1> 

            {/* <Link style={linkStyle} to="/about"></Link> */}
        </header>
    )
}

const headerStyle = {
    background: "white",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    textColor: "black"
}

const h1style = {
    color: "black"
}

// const ofd_logo_style = {
//     borderRadius: "8px",
//     float: "left",
//     padding: "8px",
//     marginTop: "20px",
//     marginLeft: "20px",
//     align: "middle",
//     maxWidth: "100%",
//     maxHeight: "100%"
// }

// const lzfd_logo_style = {
//     borderRadius: "8px",
//     float: "right",
//     padding: "8px",
//     marginTop: "20px",
//     marginRight: "20px"
// }

export default Header