export const TeamFormComponent = () => {
    const form = `
        <form action="">
            <fieldset id="teamName">
                <input type="text" name="concepts" id="concepts" maxlength="15" placeholder="Team name">
            </fieldset> 
            <button type="button" id="createTeambtn">Create Team</button>
        </form>
        `

        document.getElementById("leftAside").innerHTML += form
}