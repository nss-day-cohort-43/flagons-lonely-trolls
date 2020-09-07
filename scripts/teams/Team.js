  
export const Team = (teamObj) => {
    return `
        <tr id="team-${teamObj.id}">
            <td class="column1">${teamObj.name}</td>
            <td>${teamObj.teamSize}</td>
            <td>${teamObj.totalScore}</td>
        </tr>      
    `
}

//             <li class="teamProps">Team: ${teamObj.name}</li>
//             <li class="teamProps">Date Formed: ${teamObj.dateCreated}</li>
//             <li class="teamProps">Total Score: ${teamObj.totalScore}</li>
//             <li class="teamProps">Team Size: ${teamObj.teamSize}</li>
//         </ul>
//     </div>
//     
// }