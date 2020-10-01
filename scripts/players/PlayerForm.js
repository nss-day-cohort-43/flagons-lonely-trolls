import { getTeams, useTeams } from "../teams/TeamDataProvider.js"
import { savePlayer } from "./PlayerDataProvider.js"

const eventHub = document.querySelector("body")

export const renderPlayerForm = (teamList) => {
    const form = `
        <form id="newPlayerForm">
            <fieldset class="newPlayerField">
                <input type="text" name="firstName" id="firstName" maxlength="15" placeholder="First Name">
            </fieldset> 
            <fieldset class="newPlayerField">
                <input type="text" name="lastName" id="lastName" maxlength="15" placeholder="Last Name">
            </fieldset> 
            <fieldset class="newPlayerField">
                <input type="text" name="origin" id="origin" maxlength="15" placeholder="Country of Origin">
            </fieldset> 
            <fieldset>
            <select name="team" id="selectOpenTeam">
                <option value="0" hidden>Please select a team...</option>
                ${
                    teamList.map( teamObj => {
                        if (teamObj.teamSize < 3) {
                            const openTeam = teamObj.name;
                            const openTeamId = teamObj.id
                            return`<option value="${openTeamId}">${openTeam}</option>`
                        }
                    }).join("")               
                }
            </select>
            </fieldset>
            <button type="button" id="addPlayerBtn">Add Player to Team</button>
        </form>
        `

        document.getElementById("playerForm").innerHTML = form
}

export const PlayerFormComponent = () =>{
    getTeams()
    .then(() => {
        renderPlayerForm(useTeams());
    })
}

eventHub.addEventListener("teamStateChanged", () => {
    PlayerFormComponent()
})


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addPlayerBtn") {
        const playerFirstNameInput = document.querySelector("#firstName")
        const playerLastNameInput = document.querySelector("#lastName")
        const playerOriginInput = document.querySelector("#origin")
        const playerTeamInput = document.querySelector("#selectOpenTeam")
        if (playerFirstNameInput.value !== "" && playerLastNameInput.value !== "" && playerOriginInput.value !== "" && playerTeamInput.value !== "0") {
            const newPlayer = {
                "name": playerFirstNameInput.value,
                "lastName": playerLastNameInput.value,
                "countryOrigin": playerOriginInput.value,
                "teamId": parseInt(playerTeamInput.value)
            }
            savePlayer(newPlayer)
            .then(() => renderPlayerForm(useTeams()))
        }
    }
})
