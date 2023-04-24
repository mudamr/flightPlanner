import "./App.css";
import FlightPlanner from "./components/leaflet/FlightPlanner";

function App() {
  return (
    <div className="App">
      <div>Drone flight planner</div>
      <FlightPlanner></FlightPlanner>
    </div>
  );
}

export default App;
