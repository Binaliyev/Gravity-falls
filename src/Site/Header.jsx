import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"
import { FaRegMoon } from "react-icons/fa6";
import { useRef, useState } from "react";
import { BsSun } from "react-icons/bs";
export const Header = () => {
    const [darkMode, setDarkMode] = useState(false)
    const darkModeFuction = () => {
        setDarkMode(!darkMode)
        window.localStorage.setItem("darkMode", ! darkMode)
    }
    return (
        <header className={darkMode ?  "bg-dark" : "bg-light shadow"} style={{ width: "100%", position: "fixed", zIndex: "999999999", top: "0" }}>
            <div className="container">
                <div className="header-inner d-flex align-items-center justify-content-between">
                    <NavLink className={"text-decoration-none"} to={"/"}>
                        <img width={"135px"} height={"90px"} src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Gravity_Falls_logo.svg" alt="gravity-falls-LOGO" />
                    </NavLink>
                    <ul className="header-ul d-flex align-items-center justify-content-between w-50" style={{ listStyle: "none" }}>
                        <li className="header-list" style={{ fontSize: "20px" }}><NavLink className={darkMode ? (params) => params.isActive ? "text-decoration-underline text-light" : "text-decoration-none text-light" : (params) => params.isActive ? "text-decoration-underline text-primary" : "text-decoration-none text-dark"} to={"/characters"}>Characters</NavLink></li>
                        <li className="header-list" style={{ fontSize: "20px" }}><NavLink className={darkMode ? (params) => params.isActive ? "text-decoration-underline text-light" : "text-decoration-none text-light" : (params) => params.isActive ? "text-decoration-underline text-primary" : "text-decoration-none text-dark"} to={"/info"}>Info</NavLink></li>
                        <li className="header-list" style={{ fontSize: "20px" }}><NavLink className={darkMode ? (params) => params.isActive ? "text-decoration-underline text-light" : "text-decoration-none text-light" : (params) => params.isActive ? "text-decoration-underline text-primary" : "text-decoration-none text-dark"} to={"/episode"}>Episode</NavLink></li>
                    </ul>
                    <Button onClick={darkModeFuction} className={darkMode ? "bg-light" : "bg-dark"} style={{ height: "2.5rem", borderRadius: "5rem" }}>
                        {darkMode ? <BsSun className="fs-4" /> : <FaRegMoon className="fs-4" />}
                    </Button>
                </div>
            </div>
        </header>
    )
}