import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = (props) => {
    const city = props.city

    return (
        <div className="">
            <nav className="containerInside">
                <Link style={{color: city === '' ? "#5fb0e8" : "black", borderBottom: city === 'ottawa' ? "5px solid #5fb0e8" : "none", marginBottom: "15px", textDecoration: city === 'a' ? "underline" : "none"}} to={'/'}><p>OTTAWA</p></Link>
                <Link style={{color: city === 'moscow' ? "#5fb0e8" : "black",  borderBottom: city === 'moscow' ? "5px solid #5fb0e8" : "none", marginBottom: "15px", textDecoration: city === 'moscowa' ? "underline" : "none"}} to={'/moscow'}><p>MOSCOW</p></Link>
                <Link style={{color: city === 'tokyo' ? "#5fb0e8" : "black",  borderBottom: city === 'tokyo' ? "5px solid #5fb0e8" : "none", marginBottom: "15px", textDecoration: city === 'tokyoa' ? "underline" : "none"}} to={'/tokyo'}><p>TOKYO</p></Link>
            </nav>
        </div>
    )
}

export default Header