export const Score = (scoreObj) => {
    return `
    <div id="score-${scoreObj.id}">
        <ul>
            <li class="scoreProps">Team ID: ${scoreObj.teamId}</li>
            <li class="scoreProps">Game Date: ${scoreObj.date}</li>
            <li class="scoreProps">Team Score: ${scoreObj.score}</li>
        </ul>
    </div>
    `
}