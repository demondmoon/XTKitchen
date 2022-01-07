import { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../../map/mapStyles";
import classes from "./Map.module.css";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "60vh",
};

const center = {
  lat: -33.895143,
  lng: 151.0999,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const markers = [
  {
    id: 1,
    lat: -33.84993793017076,
    lng: 151.03151309764343,
    name: "HF Auburn",
    address: "57-59 Queen St, Auburn NSW 2144",
    opening: '9am-8pm'
  },
  {
    id: 2,
    lat: -33.87436633328261,
    lng: 151.10599862832782,
    name: "HF Burwood",
    address: "100 Burwood Rd, Burwood NSW 2134",
    opening: '8am-8pm'
  },
  {
    id: 3,
    lat: -33.931269434189446,
    lng: 151.19459634038893,
    name: "HF Mascot",
    address: "1201 Botany Rd, Mascot NSW 2020",
    opening: '10am-8pm'
  },
  {
    id: 4,
    lat: -33.869407615651035,
    lng: 151.20780421155186,
    name: "HF City",
    address: "197 Pitt St, Sydney NSW 2000",
    opening: '9am-10pm'
  },
  {
    id: 5,
    lat: -33.7943195466449,
    lng: 151.1861863710691,
    name: "HF Chatswood",
    address: "345 Victoria Ave, Chatswood NSW 2067",
    opening: '9am-9pm'
  },
  {
    id: 6,
    lat: -33.917075160941984,
    lng: 151.03593071963027,
    name: "HF Bankstown",
    address: "North Terrace, Bankstown NSW 2200",
    opening: '9am-8pm'
  },
];
const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [selectedMarkers, setSelectedMarkers] = useState(null);

  if (loadError) {
    return "Error loading maps";
  }
  if (!isLoaded) {
    return "Loading maps";
  }
  return (
    <div>
      <h2 className={classes.title}>Store Locator</h2>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/store.svg",
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelectedMarkers(marker);
            }}
          />
        ))}
        {selectedMarkers && (
          <InfoWindow
            position={{ lat: selectedMarkers.lat, lng: selectedMarkers.lng }}
            onCloseClick={() => {
              setSelectedMarkers(null);
            }}
          >
            <div className={classes.marker}>
              <h2>{selectedMarkers.name}</h2>
              <p>{selectedMarkers.address}</p>
              <p>Opening Hours: {selectedMarkers.opening}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
