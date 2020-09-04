export const Score = (scoreObj) => {
    return `
    <div id="score-${scoreObj.id}">
        <ul>
            <li class="scoreProps">${scoreObj.teamId}</li>
            <li class="scoreProps">${scoreObj.date}</li>
            <li class="scoreProps">${scoreObj.score}</li>
        </ul>
    </div>
    `
}