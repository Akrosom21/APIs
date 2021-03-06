import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) => {
    return (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 51.5085300, lng: -0.1257400 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 51.5085300, lng: -0.1257400 }} />}
    </GoogleMap>
        )}))
export default Map