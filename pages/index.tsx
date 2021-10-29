import { useState } from "react"
import Card from "../components/Card"
import styles from "../styles/form.module.css"
import Link from "next/link"
import InputNumber from "../components/InputNumber"

export default function Form() {

  const [amountDoors, setAmountDoors] = useState(3)
  const [hasGift, setHasGift] = useState(1)


  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card> 
        <Card>
          <InputNumber text="How many doors?" value={amountDoors} 
          onChange={newAmount => {setAmountDoors(newAmount)}} />
        </Card> 
      </div>
      <div>
        <Card>
          <InputNumber text="What door was selected?" value={hasGift} 
          onChange={newDoorGift => {setHasGift(newDoorGift)}} />
        </Card> 
        <Card bgcolor="#28a085">
          <Link href={`/monty-hall-game/${amountDoors}/${hasGift}`} passHref>
            <h2 className={styles.link}>Started</h2>
          </Link>
        </Card> 
      </div>
    </div> 
  )
}
