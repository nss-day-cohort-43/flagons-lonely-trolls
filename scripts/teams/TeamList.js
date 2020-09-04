import { useTeams } from "./TeamDataProvider.js"
import { Team } from "./Team.js"

export const TeamList = () => {

    const contentElement = document.querySelector("body")
    const teamArray = useTeams()

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <ul>
            ${teamArray.map(team => Team(team)).join("")}
        </ul>
    `
}