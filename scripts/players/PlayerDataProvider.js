const players = []

const eventHub = document.querySelector("body")

const dispatchStateChangeEvent = () => {
    const teamStateChangedEvent = new CustomEvent("playerStateChanged")

    eventHub.dispatchEvent(playerStateChangedEvent)
}

export const usePlayers = () => {
    return players.slice()
}

export const getplayers = () => {
    return fetch('http://localhost:8088/players')
        .then(response => response.json())
        .then(parsedplayers => players = parsedplayers)
}

export const saveplayer = player => {
    return fetch('http://localhost:8088/players', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(player)
    })
    .then(getplayers)
    .then(dispatchStateChangeEvent)
}