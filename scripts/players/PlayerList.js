import { usePlayers } from "./PlayerDataProvider.js"
import { Player } from "./Player.js"

export const PlayerList = () => {

    const contentElement = document.querySelector("#playerForm")
    const playerArray = usePlayers()

    contentElement.innerHTML += `
        <h2>Players</h2>
        ${playerArray.map(player => Player(player)).join("")}
    `
}