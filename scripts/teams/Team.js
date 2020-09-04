  
export const Team = (teamObj) => {
    return `
    <div id="team-${teamObj.id}">
        <ul>
            <li class="teamProps">${teamObj.name}</li>
            <li class="teamProps">${teamObj.dateCreated}</li>
            <li class="teamProps">${teamObj.totalScore}</li>
        </ul>
    </div>
    `
}