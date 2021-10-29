import React, { useEffect, useState } from "react"
import styles from "../../../styles/monty-hall-game.module.css"
import Door from "../../../components/Door"
import { createDoors, updateDoors } from "../../../functions/door"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Game() {

  const router = useRouter()
    
  const [validate, setValidate] = useState(false)
  const [doors, setDoors] = useState([])

  useEffect(() => {
    const doors = +router.query.doors
    const gift = +router.query.gift
      setDoors(createDoors( doors,  gift))
    }, 
  [router?.query])

  useEffect(() => {
    const doors = +router.query.doors
    const gift = +router.query.gift
    const assist = doors >= 3 && doors <= 100 && gift > 0 && gift <= doors
    setValidate(assist)
  }, [doors, router.query.doors, router.query.gift])


  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} value={door} 
      onChange={newDoor => {
        setDoors(updateDoors(doors, newDoor))
      }} />
    })
  }
    
    return(
        <div id={styles.game}>
          <div className={styles.doors}>
            {validate ? renderDoors() :
              <h1>Invalid values</h1>
            }
          </div>
          <div className={styles.buttons}>
            <Link href="/" passHref>
              <button>Restart</button>
            </Link>
          </div>
        </div>
    )
}