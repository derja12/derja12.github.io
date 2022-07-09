var app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: {
        title: "Derek Jacketta - Projects",
        links: {
            "2021": [
                {
                    name: "Schedule Master v1",
                    link: "https://derja12.github.io/3200-Final",
                    github: "https://github.com/derja12/schedule-creator",
                    image: "./Images/SM1.png"
                },

            ],
            "2022": [
                {
                    name: "Color Click Racer",
                    link: "https://derja12.github.io/Color-Click-Racer",
                    image: "./Images/CCR.png"
                },
                {
                    name: "Jump Flood Algorithm - (Voronoi Diagrams)",
                    link: "https://derja12.github.io/JFA",
                    image: "./Images/JFA.png"
                },
                {
                    name: "Schedule Master v3",
                    link: "https://schedule-m.herokuapp.com/",
                    image: "./Images/SM3.png"
                },
                {
                    name: "Maze Game Demo",
                    link: "https://derja12.github.io/Maze-Game",
                    image: "./Images/MGD.png"
                },
                
            ]
        }
    }
})