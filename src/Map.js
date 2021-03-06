import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map () {
    const [center, setCenter] = useState({
        lat: 51.5085300,
        lng: -0.1257400
    })
    const [zoom, setZoom] = useState(11)
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCS0Rr40284eSENmAZCjwzKPIA5Qu64X9A', language: 'en' }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={51.5085300}
                        lng={-0.1257400}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );

}

export default Map;