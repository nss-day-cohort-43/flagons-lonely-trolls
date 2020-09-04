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