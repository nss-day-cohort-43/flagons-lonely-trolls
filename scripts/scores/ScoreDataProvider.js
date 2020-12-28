const eventHub = document.querySelector("body")

const dispatchScoreChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("scoreStateChanged"))
}

export const saveScores = (scoreArray) => {
    scoreArray.forEach(scoreObj => {
        return fetch('/scores', {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(scoreObj)
        })
            .then(dispatchScoreChangeEvent)
    })
}