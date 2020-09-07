import { useTeams, getTeams } from "./TeamDataProvider.js"
import { Team } from "./Team.js"


export const TeamList = () => {
    getTeams()
        .then(() => {
            const teamArray = useTeams();
            addTeamsToLeaderboard(teamArray)
            }
        )
}

const addTeamsToLeaderboard = arrayOfTeams => {
    const domElement = document.querySelector("#leaderboard")
    let HTMLArray = arrayOfTeams.map(team => Team(team))
    domElement.innerHTML = `
        <h2>Leaderboard</h2>
        ${HTMLArray.join("")}
    `
}