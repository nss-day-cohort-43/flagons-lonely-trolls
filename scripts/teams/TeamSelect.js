import { useTeams } from "./TeamDataProvider.js"

const eventHub = document.querySelector("body")

const TeamSelect = (i) => {
    const teamList = useTeams()
    return `
    <select class="participatingTeams" id="selectReadyTeam${i}">
    <option value="0" hidden>Please select team ${i}...</option>
        ${
            teamList.map( teamObj => {
                if (teamObj.teamSize === 3) {
                    const openTeam = teamObj.name;
                    const openTeamId = teamObj.id
                    return`<option value="${openTeamId}">${openTeam}</option>`
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

eventHub.addEventListener("change", e => {
    const chosenTeams = document.querySelectorAll(".participatingTeams")
    if(e.target.classList[0] === "participatingTeams" && chosenTeams.every(option => { return option.value !== "0"})) {
        if(classList[0].value !== classList[1].value && classList[2].value !== classList[1].value && classList[0].value !== classList[2].value) {
            const dropdownComplete = new CustomEvent("dropdownsSelected", {
                detail: {
                    Team1: chosenTeams[0].value,
                    Team2: chosenTeams[1].value,
                    Team3: chosenTeams[2].value
                }
            })
            eventHub.dispatchEvent(dropdownComplete)
        }
    }
})