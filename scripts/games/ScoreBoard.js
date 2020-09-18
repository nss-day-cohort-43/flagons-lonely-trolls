export const scoreBoard = (teamsArray) => {
    return `
    <table>
        <tr>
            <th>Score</th>
        </tr>
        <tr>
            <th>${teamsArray[0].name}</th>
            <td>${teamsArray[0].totalScore}</td>
            <th>${teamsArray[1].name}</th>
            <td>${teamsArray[1].totalScore}</td>
            <th>${teamsArray[2].name}</th>
            <td>${teamsArray[2].totalScore}</td>
        </tr>
    </table>
    `
}