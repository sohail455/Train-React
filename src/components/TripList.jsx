import styles from './TripList.module.css'
import TripItem from './TripItem'

function TripList({ trips }) {
    return (
        <ul className={styles.container}>
            {
                trips.map(trip => <TripItem trip={trip} />)
            }
        </ul>
    )
}

export default TripList