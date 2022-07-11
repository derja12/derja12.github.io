// Made-For types
const MFT = {
    school: "School",
    personal: "Personal",
    codeschool: "Code School",
    work: "Work",
}

// Project types
const PT = {
    webapp: "Web Application",
    script: "Script",
    cli: "CLI",
}

// Language types
const LT = {
    python: "Python",
    cPlusPlus: "C++",
    goLang: "Golang",
    js: "Javascript",
    nodejs: "NodeJS",
}

// Project information
const LINKS = {
    "2022": [
        {
            name: "Color Click Racer",
            desc: `
                A multiplayer version of 'cookie clicker' that utilizes express websockets.
                `,
            made_for: [MFT.school],
            projects: [PT.webapp],
            languages: [LT.js, LT.nodejs],
            link: "https://derja12.github.io/Color-Click-Racer",
            github: "https://github.com/derja12/color-click-racer",
            image: "./Images/CCR.png"
        },
        {
            name: "Jump Flood Algorithm",
            desc: `
                An algorithm which uses 'seed' pixels to draw Voronoi Diagrams.
                Each canvas is saved so the user can compare previously drawn images.
                `,
            made_for: [MFT.personal],
            projects: [PT.webapp],
            languages: [LT.js],
            github: "https://github.com/derja12/jump-flood-algorithm",
            link: "https://derja12.github.io/JFA",
            image: "./Images/JFA.png"
        },
        {
            name: "Schedule Master 3.0",
            desc: `
                The third and final(?) version of a schedule creator. 
                Many more features than the 1.0 version (multiple dynamic schedules!).
                `,
            made_for: [MFT.school, MFT.work],
            projects: [PT.webapp],
            languages: [LT.js, LT.nodejs],
            github: "https://github.com/derja12/schedule-master-3",
            link: "https://schedule-m.herokuapp.com/",
            image: "./Images/SM3.png"
        },
        {
            name: "Maze Game Demo",
            desc: `
                A supplementary project for teaching Codeschool.
                Though 'Maze Game' was cut from the class lessons there is detailed instructions on github for recreating it.
                `,
            made_for: [MFT.codeschool],
            projects: [PT.webapp],
            languages: [LT.js],
            link: "https://derja12.github.io/Maze-Game",
            github: "https://github.com/derja12/CodeSchool2022-MazeGame",
            image: "./Images/MGD.png"
        },
        
    ],
    "2021": [
        {
            name: "Schedule Master 1.0",
            desc: `
                The first iteration of a scheduling application that was designed to be used
                by Utah Tech University's Head Lab Assistant.
                `,
            made_for: [MFT.school, MFT.work],
            projects: [PT.webapp],
            languages: [LT.python, LT.js],
            link: "https://derja12.github.io/3200-Final",
            github: "https://github.com/derja12/schedule-creator",
            image: "./Images/SM1.png"
        },
        {
            name: "Map Reduce",
            desc: `
                Distributed System which maps out tasks for worker nodes with the goal
                of counting each word occurance in all Jane Austen novels. Uses RPC for communication and Sqlite for data storage.
                `,
            made_for: [MFT.school],
            projects: [PT.cli],
            languages: [LT.goLang],
            github: "https://github.com/derja12/map-reduce",
            image: "./Images/MR.png",
        }

    ],
    "2020": [
        {
            name: "Complex Fractal Generator",
            desc: `
                A Command Line Interface for generating different complex fractal images.
                `,
            made_for: [MFT.school],
            projects: [PT.cli],
            languages: [LT.cPlusPlus],
            github: "https://github.com/derja12/complex-fractal-generator",
            image: "./Images/CFG.png"
        }
    ],
}

var app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: {
        title: "Derek Jacketta - Portfolio",

        types: {
            "made_fors": {...MFT},
            "projects": {...PT},
            "languages": {...LT}
        },

        links: LINKS,
    }
})