  
export const Team = (teamObj) => {
    return `
    <section id="team-${teamObj.id}">
        <li class="teamProps">${teamObj.name}</li>
        <li class="teamProps">${teamObj.dateCreated}</li>
        <li class="teamProps">${teamObj.totalScore}</li>
    </section>
    `
}