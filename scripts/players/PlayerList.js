import { usePlayers } from "./PlayerDataProvider.js"
import { Player } from "./Player.js"

export const PlayerList = () => {

    const contentElement = document.querySelector("body")
    const playerArray = usePlayers()

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <section id="playerContainer">
            <h2>Players</h2>
            ${playerArray.map(player => Player(player)).join("")}
        </section>
    `
}