import { useTeams } from "./TeamDataProvider.js"
import { Team } from "./Team.js"

export const TeamList = () => {

    const contentElement = document.querySelector("body")
    const teamArray = useTeams()

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <section id="teamContainer>
            ${teamArray.map(team => Team(team)).join("")}
        </section>
    `
}