import { getTeams, useTeams } from "../teams/TeamDataProvider.js"

const eventHub = document.querySelector("body")

export const renderPlayerForm = (teamList) => {
    const form = `
        <form id="newPlayerForm">
            <fieldset class="newPlayerField">
                <input type="text" name="firstName" id="firstName" maxlength="15" placeholder="First Name">
            </fieldset> 
            <fieldset id="newPlayerField">
                <input type="text" name="lastName" id="lastName" maxlength="15" placeholder="Last Name">
            </fieldset> 
            <fieldset id="newPlayerField">
                <input type="text" name="origin" id="origin" maxlength="15" placeholder="Country of Origin">
            </fieldset> 
            <fieldset>
            <select name="team" id="selectOpenTeam">
                <option value=0>Please select a team...</option>
                ${
                    teamList.map( teamObj => {
                        if (teamObj.teamSize < 3) {
                            const openTeam = teamObj.name;
                            return`<option value=${openTeam}>${openTeam}</option>`
                        }
                    })               
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

    eventHub.addEventListener("teamStateChanged", () => {
        getTeams()
        .then(() => {
            renderPlayerForm(useTeams());
        })
    })
}
