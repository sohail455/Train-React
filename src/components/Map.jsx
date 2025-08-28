import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import styles from './Map.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'




function Map() {
    const [position, setPosition] = useState([40, 50])
    const [searchParams, setSearcParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    useEffect(function () { setPosition([lat || 40, lng || 50]) }, [lat, lng])
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
                <DetectClick />

            </MapContainer>
        </div>
    )
}

function ChangeCenter({ position }) {
    const map = useMap()
    map.setView(position)
    return null
}

function DetectClick() {
    const navigate = useNavigate()
    useMapEvents({
        click: (e) => {
            console.log(e)
            navigate(`/applayout?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
        }
    })
    return null
}

export { Map }