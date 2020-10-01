import { saveTeam } from "./TeamDataProvider.js"

const eventHub = document.querySelector("body")

export const TeamFormComponent = () => {
    const form = `
        <form>
            <fieldset id="teamNameField">
                <input type="text" name="teamName" id="teamName" maxlength="15" placeholder="Team Name" required>
            </fieldset>
            <button type="submit" id="createTeamBtn">Create Team</button>
        </form>
        `

        document.getElementById("teamForm").innerHTML += form
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createTeamBtn") {
        const teamInput = document.querySelector("#teamName")
        if (teamInput.value !== "") {
            const newTeam = {
                "name": teamInput.value,
                "dateCreated": Date.now(),
                "totalScore": 0,
                "teamSize": 0
            }
            saveTeam(newTeam)
            teamInput.value = ""
        }
    }
})