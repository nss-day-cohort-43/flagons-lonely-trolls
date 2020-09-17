import { renderTeamDropdowns } from "../teams/TeamSelect.js"
import { useTeams } from "../teams/TeamDataProvider.js"
import { RoundScoreForm } from "./RoundScoreForm.js"

const eventHub = document.querySelector("body")
let playingTeams = [];

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

    playingTeams.push(teamOne, teamTwo, teamThree)

    const formHTML = RoundScoreForm(playingTeams)
    contentTarget.innerHTML = `
        <h4 class="roundHeader" id="1">Round 1</h4>
        ${formHTML}
    `
})

eventHub.addEventListener("roundScored", event => {
    const contentTarget = document.querySelector("#gameContainer")

    const formHTML = RoundScoreForm(playingTeams)
    
    if(event.detail.round < 4) {
        contentTarget.innerHTML = `
            <h4 class="roundHeader" id="${event.detail.round}">Round ${event.detail.round}</h4>
            ${formHTML}
        `
    } else {
        contentTarget.innerHTML = `
            <p>You're done</p>
        `
    }
})