import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents } from "react-leaflet";

function Map({ selectedPath, waypoints, setWaypoints, clickedPosition, setClickedPosition, setSelectedPath }) {
  //Initial map position set to somewhere in barcelona
  const position = [41.385, 2.12];
  const MapClickEventHandler = () => {
    useMapEvents({
      click(e) {
        setWaypoints([...waypoints, [e.latlng.lat, e.latlng.lng]]);
        setClickedPosition(e.latlng);
      },
    });
    return null;
  };

  //update paths when new waypoints are inserted
  useEffect(() => {
    setSelectedPath({ waypoints });
  }, [waypoints, setSelectedPath]);

  return (
    <MapContainer className="map-container" center={position} zoom={15} dblclick={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {clickedPosition && <Marker position={clickedPosition} />}
      {selectedPath && (
        <>
          <Polyline positions={selectedPath.waypoints} color="red" weight={3} />
        </>
      )}
      <MapClickEventHandler />
    </MapContainer>
  );
}

export default Map;
