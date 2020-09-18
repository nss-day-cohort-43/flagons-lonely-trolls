import { useScores } from "./ScoreDataProvider.js"
import { Score } from "./Score.js"

export const ScoreList = () => {
    const contentElement = document.querySelector("#scoreContainer")
    const scoreArray = useScores()
}