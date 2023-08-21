import "./App.css";
import ThemeProvider from "./contexts/ThemeProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Form from "./components/Form";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Form />
    </ThemeProvider>
  );
}

export default App;
