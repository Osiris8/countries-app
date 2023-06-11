import "./App.css";
import Navigation from "./components/Navigation";
import Countries from "./components/Countries";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Navigation />
      <Countries />
    </div>
  );
}

export default App;
