  
export const Team = (teamObj) => {
    return `
    <div id="team-${teamObj.id}">
        <ul>
            <li class="teamProps">Team: ${teamObj.name}</li>
            <li class="teamProps">Date Formed: ${teamObj.dateCreated}</li>
            <li class="teamProps">Total Score: ${teamObj.totalScore}</li>
            <li class="teamProps">Team Size: ${teamObj.teamSize}</li>
        </ul>
    </div>
    `
}