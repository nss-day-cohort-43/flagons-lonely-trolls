  
export const Team = (teamObj) => {
    return `
        <table id="team-${teamObj.id}">
            <tr>
            <th>Name</th>
            <th>Player</th>
            <th>score</th>
            </tr>
            <tr>
            <td>${teamObj.name}</td>
            <td>${teamObj.teamSize}</td>
            <td>${teamObj.totalScore}</td>
            </tr>
        </table>
      
`

//             <li class="teamProps">Team: ${teamObj.name}</li>
//             <li class="teamProps">Date Formed: ${teamObj.dateCreated}</li>
//             <li class="teamProps">Total Score: ${teamObj.totalScore}</li>
//             <li class="teamProps">Team Size: ${teamObj.teamSize}</li>
//         </ul>
//     </div>
//     
// }