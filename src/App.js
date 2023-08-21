import "./App.css";
import ThemeProvider from "./contexts/ThemeProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
