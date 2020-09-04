let teams = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const teamStateChangedEvent = new CustomEvent("teamStateChanged")

    eventHub.dispatchEvent(teamStateChangedEvent)
}

export const useTeams = () => teams.slice()

export const getTeams = () => {
    return fetch('http://localhost:8088/teams')
        .then(response => response.json())
        .then(parsedTeams => teams = parsedTeams)
}

export const saveTeam = team => {
    return fetch('http://localhost:8088/teams', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(team)
    })
    .then(getTeams)
    .then(dispatchStateChangeEvent)
}