import { useTeams, getTeams } from "./TeamDataProvider.js"
import { Team } from "./Team.js"


export const TeamList = () => {
    getTeams()
        .then(() => {
            const teamArray = useTeams();
            addTeamsToDOM(teamArray)
            }
        )
}

const addTeamsToDOM = arrayOfTeams => {
    const domElement = document.querySelector("#teamContainer")
    let HTMLArray = arrayOfTeams.map(team => Team(team))
    domElement.innerHTML = `
        <h2>Teams</h2>
            ${HTMLArray.join("")}
    `
}