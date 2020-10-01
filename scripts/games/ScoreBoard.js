export const scoreBoard = (scoreArray) => {
    return `
    <table class="scoreBoard">
        <h2 id="scoreHeading">Score</h2>
        <tr>
            <th>${scoreArray[0].teamName}</th>
            <td>${scoreArray[0].score}</td>
            <th>${scoreArray[1].teamName}</th>
            <td>${scoreArray[1].score}</td>
            <th>${scoreArray[2].teamName}</th>
            <td>${scoreArray[2].score}</td>
        </tr>
    </table>
    `
}