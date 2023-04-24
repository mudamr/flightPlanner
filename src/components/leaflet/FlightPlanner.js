import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import Map from "./Map";
import "./controls.css";

function FlightPlanner() {
  const [selectedPath, setSelectedPath] = useState(null);
  const [waypoints, setWaypoints] = useState([]);
  const [paths, setPaths] = useState([]);
  const [clickedPosition, setClickedPosition] = useState(null);

  useEffect(() => {
    const savedPaths = JSON.parse(localStorage.getItem("paths"));
    if (savedPaths) {
      setPaths(savedPaths);
      setSelectedPath(savedPaths[savedPaths.length - 1]);
    }
  }, []);

  const loadEventHandler = (path) => {
    setSelectedPath(path);
    setClickedPosition(false);
  };

  const cancelEventHandler = () => {
    setWaypoints([]);
    setClickedPosition(false);
  };

  const saveEventHandler = () => {
    let newPaths;
    if (paths) {
      newPaths = [...paths, { id: paths.length + 1, waypoints }];
    } else {
      newPaths = [{ id: 1, waypoints }];
    }
    setPaths(newPaths);
    setWaypoints([]);
    localStorage.setItem("paths", JSON.stringify(newPaths));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Map
          selectedPath={selectedPath}
          setSelectedPath={setSelectedPath}
          waypoints={waypoints}
          setWaypoints={setWaypoints}
          clickedPosition={clickedPosition}
          setClickedPosition={setClickedPosition}
        />
        <Controls
          onSave={saveEventHandler}
          onCancel={cancelEventHandler}
          onLoad={loadEventHandler}
          paths={paths}
          selectedPath={selectedPath}
        ></Controls>
      </div>
    </>
  );
}

export default FlightPlanner;
