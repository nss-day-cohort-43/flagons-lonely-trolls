const teams = [
    {
        id: 1,
        name: "Lonely Trolls",
        dateCreated: "9/1/2020",
        totalScore: 98
    },
    {
        id: 2,
        name: "Green Dragons",
        dateCreated: "8/21/2020",
        totalScore: 65
    },
    {
        id: 3,
        name: "Shining Shields",
        dateCreated: "9/3/2020",
        totalScore: 73
    }

]

export const useTeams = () => {
    return teams.slice()
}