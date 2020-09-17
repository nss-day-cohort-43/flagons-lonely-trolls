import { renderTeamDropdowns } from "../teams/TeamSelect.js"
import { useTeams } from "../teams/TeamDataProvider.js"

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", e => {
    if(e.target.id === "startButton") {
        renderTeamDropdowns()
    }
})

eventHub.addEventListener("dropdownsSelected", event => {
    const contentTarget = document.querySelector("#gameContainer")

    const allTeams = useTeams()
    const teamOne = allTeams.find(team => team.id === event.detail.team1)
    const teamTwo = allTeams.find(team => team.id === event.detail.team2)
    const teamThree = allTeams.find(team => team.id === event.detail.team3)

    console.log(teamOne)
    
    contentTarget.innerHTML = `
        <h4>Round 1</h4>
        <form>
            <label for="firstTeam">${teamOne.name}</label><br>
            <input type="number" name="firstTeam"><br>
            <label for="secondTeam">${teamTwo.name}</label><br>
            <input type="number" name="secondTeam"><br>
            <label for="thirdTeam">${teamThree.name}</label><br>
            <input type="number" name="thirdTeam"><br>
            <button type="button" id="roundScoreBtn">Save Round Scores</button>
        </form>
    `
})