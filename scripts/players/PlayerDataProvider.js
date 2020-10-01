const players = []

const eventHub = document.querySelector("body")

const dispatchStateChangeEvent = (player) => {
    const playerStateChangedEvent = new CustomEvent("playerStateChanged", {
        detail: {
            playerTeamId: player.teamId
        }
    })

    eventHub.dispatchEvent(playerStateChangedEvent)
}

export const usePlayers = () => {
    return players.slice()
}

export const savePlayer = player => {
    return fetch('http://localhost:8088/players', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(player)
    })
    .then(() => dispatchStateChangeEvent(player))
}