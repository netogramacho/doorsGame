import DoorModel from "../model/door";

export function createDoors(amount: number, doorHasGift: number) : DoorModel[] {
    return Array.from({ length: amount}, (_, i) => {
        const number = i + 1
        const hasGift = number === doorHasGift
        return new DoorModel(number, hasGift)
    })
}

export function updateDoors(doors: DoorModel[], updated: DoorModel) {
    return doors.map(door => {
        const updatedDoor = door.number === updated.number
        if(updatedDoor) {
            return updated
        } else {
            return updated.opened ? door : door.deselect()
        }
    })
}