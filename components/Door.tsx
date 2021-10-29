import DoorModel from "../model/door"
import styles from "../styles/doors.module.css"
import Gift from "./Gift"


interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Doors(props:DoorProps) {

    const door  = props.value

    const selected = door.selected && !door.opened ? styles.selected : ''

    const selectToggle = e => {props.onChange(door.selectToggle())}
    const open = e => {
        e.stopPropagation()
        props.onChange(door.open())
    }

    function renderDoor() {
        return(
                <div className={styles.door}>
                    <div className={styles.number}>{door.number}</div>
                    <div className={styles.handle} 
                    onClick={open}></div>
            </div>
        )
    }

    return(
        <div className={styles.area} onClick={selectToggle}>
            <div className={`${styles.frame} ${selected}`}>
                {door.closed ? 
                renderDoor() : 
                door.hasGift ? <Gift /> : false }
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}