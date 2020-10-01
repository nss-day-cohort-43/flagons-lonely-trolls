export const Team = (teamObj) => {
    return `
        <tr id="team-${teamObj.id}">
            <td class="column1">${teamObj.name}</td>
            <td>${teamObj.teamSize}</td>
            <td>${teamObj.totalScore}</td>
        </tr>      
    `
}