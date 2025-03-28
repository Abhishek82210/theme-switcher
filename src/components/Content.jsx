import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Content = () => {
    const { theme } = useContext(ThemeContext);
    console.log("Content Component Rendered, Theme:", theme);
    return (
        <div style={{
            background: theme === "light" ? "#f5f5f5" : "#222",
            color: theme === "light" ? "#000" : "#fff",
            padding: "20px",
            height: "100vh",
        }}>
            <h3>This is {theme} mode.</h3>
            <p>Toggle the button above to switch themes.</p>
        </div>
    );
};

export default Content;
