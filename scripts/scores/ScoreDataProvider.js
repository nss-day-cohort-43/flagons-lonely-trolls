const eventHub = document.querySelector("body")

const scores = [

]

export const useScores = () => {
    return scores.slice()
}


export const saveScores = (scoreArray) => {
    scoreArray.map(scoreObj =>
        delete scoreObj.teamName
    )

    console.log("scorearray post delete", scoreArray)
    
    scoreArray.forEach(scoreObj => {
    return fetch('http://localhost:8088/scores', {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(scoreObj)
    })
    .then(dispatchScoreChangeEvent)
})
}


const dispatchScoreChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("scoreStateChanged"))
}

eventHub.addEventListener("click", clickEvent => {


})