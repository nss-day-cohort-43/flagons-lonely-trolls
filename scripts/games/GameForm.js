import { renderTeamDropdowns } from "../teams/TeamSelect.js"

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", e => {
    if(e.target.id === "startButton") {
        renderTeamDropdowns()
    }
})

eventHub.addEventListener("dropdownsSelected", event => {
    const contentTarget = document.querySelector("#gameContainer")
    
    contentTarget.innerHTML = `
        <h4>Round 1</h4>
        <form>
            <label for="firstTeam">${event.detail.team1}</label><br>
            <input type="number" name="firstTeam"><br>
            <label for="secondTeam">${event.detail.team2}</label><br>
            <input type="number" name="secondTeam"><br>
            <label for="thirdTeam">${event.detail.team3}</label><br>
            <input type="number" name="thirdTeam"><br>
            <button type="button" id="roundScoreBtn">Save Round Scores</button>
        </form>
    `
})