import React, { useState, useEffect } from "react";
import ReactMapboxGl, { Layer, Feature, Marker, Popup, ZoomControl, ScaleControl } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZ3Vuc29qb2UiLCJhIjoiY2wyMTE0NWhsMTFwbTNrbzVzcThwZmtmayJ9.ILs0HcbGfFwuk-dyaziyyw",
  doubleClickZoom: false,
  touchZoomRotate: false,
  scrollZoom: false,
  dragPan: false,
});

const Map2 = () => {
  const [visible, setVisible] = useState(false);
  const [center, setCenter] = useState([-93.6859, 45.7296]);
  const [zoom, setZoom] = useState([7.0]);
  return (
    <div>
      <Map
        style="mapbox://styles/gunsojoe/cl3caqge2000014mrflhuui9j"
        containerStyle={{
          height: "600px",
          width: "100%",
          borderRadius: "6px",
        }}
        scrollZoom={false}
        boxZoom={false}
        doubleClickZoom={false}
        maxZoom={1}
        zoom={zoom}
        center={center}
        onClick={() => setVisible(null)}
      ></Map>
    </div>
  );
};

export default Map2;
