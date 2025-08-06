import styles from './TripItem.module.css'



function TripItem({ trip }) {
    return (

        <li className={styles.card}>
            <div className={styles.details}>
                <p>{trip.origin} to {trip.destination} </p>
                <p>Departure: {trip.departure_time}</p>
            </div>
            <p>Duration: {trip.duration}</p>
        </li>

    )
}

export default TripItem