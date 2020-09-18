import { useScores } from "./ScoreDataProvider.js"
import { Score } from "./Score.js"

export const ScoreList = () => {

    const contentElement = document.querySelector("#scoreContainer")
    const scoreArray = useScores()

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <h2>Score</h2>
        ${scoreArray.map(score => Score(score)).join("")}
    `
}