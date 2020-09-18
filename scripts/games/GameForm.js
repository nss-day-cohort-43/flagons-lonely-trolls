import { renderTeamDropdowns } from "../teams/TeamSelect.js"
import { useTeams } from "../teams/TeamDataProvider.js"
import { RoundScoreForm } from "./RoundScoreForm.js"

import {scoreBoard} from "./ScoreBoard.js"

const eventHub = document.querySelector("body")
let scoreArray = [];

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

    let teamIds = []
    let teamNames = []
    teamIds.push(teamOne.id, teamTwo.id, teamThree.id)
    teamNames.push(teamOne.name, teamTwo.name, teamThree.name)

    const gameDate = Date.now()

    for (let i=0; i<3; i++) {
        let newScoreObj = {
            score: 0,
            teamName: teamNames[i],
            teamId: teamIds[i],
            gameDate: gameDate
        }
        scoreArray.push(newScoreObj)
    }
    
    const formHTML = RoundScoreForm(scoreArray)
    contentTarget.innerHTML = `
        <h4 class="roundHeader" id="1">Round 1</h4>
        ${formHTML}
    `

    document.querySelector("#scoreContainer").innerHTML = scoreBoard(scoreArray);

})

eventHub.addEventListener("roundScored", event => {
    const contentTarget = document.querySelector("#gameContainer")

    const formHTML = RoundScoreForm(scoreArray)
    
    if(event.detail.round < 4) {
        contentTarget.innerHTML = `
            <h4 class="roundHeader" id="${event.detail.round}">Round ${event.detail.round}</h4>
            ${formHTML}
        `
        scoreArray[0].score += event.detail.teamOneScore
        scoreArray[1].score += event.detail.teamTwoScore
        scoreArray[2].score += event.detail.teamThreeScore
        document.querySelector("#scoreContainer").innerHTML = scoreBoard(scoreArray);

    } else {
        scoreArray[0].score += event.detail.teamOneScore
        scoreArray[1].score += event.detail.teamTwoScore
        scoreArray[2].score += event.detail.teamThreeScore
        document.querySelector("#scoreContainer").innerHTML = scoreBoard(scoreArray);

        scoreArray.sort(compare)
        contentTarget.innerHTML = `
        <p>You're done</p>
        <h1>${scoreArray[0].teamName} win... <br>now they probably won't hang out with me...</h1>
        <button type="button" id="submitScore">Save your Score</button>
        `
    }
    
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitScore") {
        saveScores()
//save score
//update leaderboard
        startButton()
    }
})

export const startButton = () => {
    document.getElementById("gameContainer").innerHTML = `<button type="button" id="startButton">It's OK. <br> You Don't Have to Play with Me Either.</button>`
}
const compare = (a,b) => {
    const scoreA = a.score;
    const scoreB = b.score
    let comparison = 0;
    if (scoreA  < scoreB) {
      comparison = 1;
    } else if (scoreA > scoreB) {
      comparison = -1;
    }
    return comparison;
}