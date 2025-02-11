import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import ContextComponent from "./ContextComponent";

function App() {
  return (
    <ThemeProvider>
      <ContextComponent />
    </ThemeProvider>
  );
}

export default App;
