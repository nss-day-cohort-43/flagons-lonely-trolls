import { renderTeamDropdowns } from "../teams/TeamSelect.js"

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", e => {
    if(e.target.id === "startButton") {
        renderTeamDropdowns()
    }
})

eventHub.addEventListener("dropdownsSelected", e => {
})