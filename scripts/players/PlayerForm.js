import { getTeams, useTeams } from "../teams/TeamDataProvider.js"

const eventHub = document.getElementById("container")

export const renderPlayerForm = (teamList) => {
    const form = `
        <form id="newPlayerForm">
            <fieldset class="newPlayerField">
                <input type="text" name="firstName" id="firstName" maxlength="15" placeholder="First Name">
            </fieldset> 
            <fieldset id="newPlayerField">
                <input type="text" name="lastName" id="lastName" maxlength="15" placeholder="Last Name">
            </fieldset> 
            <fieldset>
            <label for="openTeams">Please select a team...</label>
            <select name="team" id="selectOpenTeam">
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

        document.getElementById("leftAside").innerHTML = form
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
