import React from "react";

function Controls({ paths, onSave, onCancel, onLoad, selectedPath }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button className="button" onClick={onSave}>
        Save Path
      </button>
      <button className="button" onClick={onCancel}>
        Cancel Path
      </button>
      <br />
      {paths &&
        paths.length >= 1 &&
        paths.map((path) => (
          <button
            className={`button ${selectedPath.id === path.id ? "selected" : ""}`}
            onClick={() => onLoad(path)}
            key={path.id}
          >
            Path {path.id}
          </button>
        ))}
    </div>
  );
}

export default Controls;
