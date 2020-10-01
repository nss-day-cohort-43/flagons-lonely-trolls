export const Player = (playerObj) => {
    return `
    <div id="player-${playerObj.id}">
        <ul>
            <li class="playerProps">Player First Name: ${playerObj.name}</li>
            <li class="playerProps">Player Last Name: ${playerObj.lastName}</li>
            <li class="playerProps">Team ID: ${playerObj.teamId}</li>
            <li class="playerProps">Country of Origin: ${playerObj.countryOrigin}</li>
        </ul>
    </div>
    `
}