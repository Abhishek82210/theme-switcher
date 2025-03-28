import {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Navbar = () =>
{
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <nav style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "10px" }}>
            <h2>Theme Switcher</h2>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </nav>
    );
};
export default Navbar;