const eventHub = document.querySelector("body")

export const RoundScoreForm = teamArray => {
    return `
        <form>
            <label for="firstTeam">${teamArray[0].name}</label><br>
            <input type="number" name="firstTeam" min="0" max="3" class="teamScoreInput"><br>
            <label for="secondTeam">${teamArray[1].name}</label><br>
            <input type="number" name="secondTeam" min="0" max="3" class="teamScoreInput"><br>
            <label for="thirdTeam">${teamArray[2].name}</label><br>
            <input type="number" name="thirdTeam" min="0" max="3" class="teamScoreInput"><br>
            <button type="button" id="roundScoreBtn">Save Round Scores</button>
        </form>
    `
}

eventHub.addEventListener("click", clickEvent => {
    const inputScores = document.querySelectorAll(".teamScoreInput")
    const teamScores = [];
    for (const input of inputScores) {
        teamScores.push(parseInt(input.value))
    }
    
    if (clickEvent.target.id === "roundScoreBtn" && teamScores.every(option => (option >= 0 && option < 4))) {
        let roundNum = document.querySelector(".roundHeader").id
        parseInt(roundNum)
        roundNum++
        const finishedRound = new CustomEvent("roundScored", {
            detail: {
                round: roundNum,
                teamOneScore: teamScores[0],
                teamTwoScore: teamScores[1],
                teamThreeScore: teamScores[2],
            }
        })

        eventHub.dispatchEvent(finishedRound)

    }
})