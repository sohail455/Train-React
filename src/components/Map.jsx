import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './Map.module.css'
import { useState } from 'react'




function Map() {
    const [position, setPosition] = useState([40, 50])

    return (
        <div className={styles.MapContainer}>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} className={styles.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export { Map }