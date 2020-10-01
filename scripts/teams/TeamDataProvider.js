let teams = []

const eventHub = document.querySelector("body")

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
    .then(dispatchStateChangeEvent)
}

export const updateTeam = (teamObj) => {
    return fetch(`http://localhost:8088/teams/${teamObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(teamObj)
    })
    .then(dispatchStateChangeEvent)
}

export const updateTeamScores = (teamArray) => {
    teamArray.forEach(teamObj => {
    return fetch(`http://localhost:8088/teams/${teamObj.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(teamObj)
    })
})
}