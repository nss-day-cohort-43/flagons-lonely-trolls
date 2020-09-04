import { saveTeam } from "./TeamDataProvider.js"

export const TeamFormComponent = () => {
    const form = `
        <form>
            <fieldset id="teamNameField">
                <input type="text" name="teamName" id="teamName" maxlength="15" placeholder="Team Name">
            </fieldset>
            <button type="button" id="createTeamBtn">Create Team</button>
        </form>
        `

        document.getElementById("leftAside").innerHTML += form
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createTeamBtn") {
        const teamInput = document.querySelector("#teamName")
        
        const newTeam = {
            "name": teamInput.value,
            "dateCreated": Date.now(),
            "totalScore": 0,
            "teamSize": 0
        }
        teamInput.value = ""
        saveTeam(newTeam)
    }
})