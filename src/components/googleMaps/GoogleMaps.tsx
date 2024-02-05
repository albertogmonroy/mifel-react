import { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { useUsersStore } from "../../hooks/users/usersStore";
import { apiKey } from "../../helpers/helpers";
import { Dialog } from "primereact/dialog";

Geocode.setApiKey(apiKey);
Geocode.setRegion("es");
Geocode.setLanguage("es");

export const GoogleMaps = () => {
  const { userSelect, openMap, setOpenMap, handleSelectUser } = useUsersStore();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries: ["geometry", "drawing"],
  });

  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });

  const getDirectionByCoords = () => {
    if (userSelect?.address?.geo?.lat && userSelect?.address?.geo?.lng) {
      setMapCenter({
        lat: Number(userSelect.address.geo.lat),
        lng: Number(userSelect.address.geo.lng),
      });
      setMarkerPosition({
        lat: Number(userSelect.address.geo.lat),
        lng: Number(userSelect.address.geo.lng),
      });
    } else {
      const addressString = `${userSelect?.address?.street || ""}, ${
        userSelect?.address?.suite || ""
      }, ${userSelect?.address?.city || ""}, ${
        userSelect?.address?.zipcode || ""
      }`;
      Geocode.fromAddress(addressString).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setMapCenter({ lat, lng });
          setMarkerPosition({ lat, lng });
        },
        () => {
        }
      );
    }
  };

  useEffect(() => {
    getDirectionByCoords();
    /* eslint-disable-next-line */
  }, [userSelect]);
  return (
    <Dialog
      className="button-modal"
      header={`Ubicación del usuario ${userSelect?.name}`}
      visible={openMap}
      onHide={() => {
        setOpenMap(false);
        handleSelectUser(null);
      }}
      style={{ width: "80vw", height: "100%" }}
      closeIcon="pi pi-times"
    >
      {isLoaded && userSelect ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={mapCenter}
          zoom={16}
        >
          <Marker
            animation={window.google.maps.Animation.DROP}
            position={markerPosition}
            visible={true}
            title="Ubicación del usuario"
          />
        </GoogleMap>
      ) : null}
    </Dialog>
  );
};
