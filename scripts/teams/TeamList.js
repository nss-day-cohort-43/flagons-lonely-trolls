import { useTeams, getTeams, updateTeam } from "./TeamDataProvider.js"
import { Team } from "./Team.js"

const eventHub = document.querySelector("body")

let teamArray = []

export const TeamList = () => {
    getTeams()
        .then(() => {
            teamArray = useTeams();
            addTeamsToLeaderboard(teamArray)
            }
        )
}

const addTeamsToLeaderboard = arrayOfTeams => {
    const domElement = document.querySelector("#leaderboard")
    const sortedTeams = arrayOfTeams.sort(({totalScore:a},{totalScore:b}) => b-a) 
    let HTMLArray = sortedTeams.map(team => Team(team))

    domElement.innerHTML = `
        <h2>Leaderboard</h2>
        <table id="leaderboard-table">
            <tr>
                <th class="column1">Team Name</th>
                <th>Players</th>
                <th>Score</th>
            </tr>
            ${HTMLArray.join("")}
        </table>        
    `
}


eventHub.addEventListener("teamStateChanged", () => {
    TeamList();
})

eventHub.addEventListener("playerStateChanged", event => {
    teamArray.map(team => {
        if (team.id === event.detail.playerTeamId) {
            team.teamSize++
            updateTeam(team)
        }
    })
})

eventHub.addEventListener("scoreStateChanged", () => {
    TeamList()
})