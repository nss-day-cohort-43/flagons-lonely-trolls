
const scores = [

]

export const useScores = () => {
    return scores.slice()
}


const saveScores = (scoreArray) => {
    scoreArray.map(scoreObj =>
        delete scoreObj.teamName
    )

    fetch


}
