import "./App.css";
import ThemeProvider from "./contexts/ThemeProvider";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
