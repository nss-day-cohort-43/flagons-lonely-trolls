  
export const Player = (playerObj) => {
    return `
    <div id="player-${playerObj.id}">
        <ul>
            <li class="playerProps">${playerObj.name}</li>
            <li class="playerProps">${playerObj.lastName}</li>
            <li class="playerProps">${playerObj.teamId}</li>
            <li class="playerProps">${playerObj.countryOrigin}</li>
        </ul>
    </div>
    `
}