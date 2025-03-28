import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";

function App() {
    return (
        <ThemeProvider>
            <Navbar />
            <Content />
        </ThemeProvider>
    );
}

export default App;
