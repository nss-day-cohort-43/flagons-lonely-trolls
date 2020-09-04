import { useScores } from "./ScoreDataProvider.js"
import { Score } from "./Score.js"

export const ScoreList = () => {

    const contentElement = document.querySelector("body")
    const scoreArray = useScores()

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <section id="scoreContainer">
            <h2>Scores</h2>
            ${scoreArray.map(score => Score(score)).join("")}
        </section>
    `
}