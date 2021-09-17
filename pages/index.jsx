import Doors from "../components/door"
import Gift from "../components/gift"

export default function Home() {
  return (
    <div style={{display:"flex"}}>
      <Doors selected />
      <Doors />
    </div>
  )
}
