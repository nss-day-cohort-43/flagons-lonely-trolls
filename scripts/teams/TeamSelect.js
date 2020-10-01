import { useTeams } from "./TeamDataProvider.js"

const eventHub = document.querySelector("body")

const TeamSelect = (index) => {
    const teamList = useTeams()
    return `
    <select class="participatingTeams" id="selectReadyTeam${index}">
    <option value="0" hidden>Please select team ${index}...</option>
        ${
            teamList.map(teamObj => {
                if (teamObj.teamSize === 3) {
                    const openTeam = teamObj.name;
                    const openTeamId = teamObj.id
                    return`<option id ="team--${openTeamId}" value="${openTeamId}">${openTeam}</option>`
                }
            }).join("")               
        }
    </select>
    `
}

export const renderTeamDropdowns = () => {
    const contentTarget = document.querySelector("#gameContainer")
    let teamDropDownHTML = ``
    for(let i = 1; i < 4; i++) {
        teamDropDownHTML += TeamSelect(i)
    }
    contentTarget.innerHTML = teamDropDownHTML
}

eventHub.addEventListener("change", changeEvent => {
    const chosenTeams = document.querySelectorAll(".participatingTeams")
    const teamValues = [];
    for (const team of chosenTeams) {
        teamValues.push(team.value)
    }
    if(changeEvent.target.classList[0] === "participatingTeams" && teamValues.every(option => option !== "0")) {
        if(chosenTeams[0].value !== chosenTeams[1].value && chosenTeams[2].value !== chosenTeams[1].value && chosenTeams[0].value !== chosenTeams[2].value) {
            const dropdownComplete = new CustomEvent("dropdownsSelected", {
                detail: {
                    team1: parseInt(chosenTeams[0].value),
                    team2: parseInt(chosenTeams[1].value),
                    team3: parseInt(chosenTeams[2].value)
                }
            })
            eventHub.dispatchEvent(dropdownComplete)
        }
    }
})