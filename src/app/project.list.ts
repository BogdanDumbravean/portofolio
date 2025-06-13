import { ImgPath, Project, Text, RichTextSegment } from "./project.model";

export const PROGRAMMING: Project[] = [
    new Project(
        "Conference Management",
        "assets/img/Faculta/ISS/Login.png",
        "Application for managing the stages of a conference, made in a team. I was chosen as team leader, so I had knowledge of the whole application, but my main tasks were in the back-end and the database.",
        [
        ]
    ),
    new Project(
        "Bolts and Gears",
        "assets/img/Liceu/FTC.png",
        "First season of FTC in Romania. The contest starts from gathering funds and resources, to building the robot, and ends with a competition between the robots of the qualified teams. We qualified to the national phase. My main task was programming, but I contributed a lot to building the physical part too.",
        [
            new Text("", false, [
            { text: "You can see the current state of the team at: " },
            { text: "Bolts and Gears", isLink: true, url: "https://www.facebook.com/boltsngears" }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Personal Portfolio Website",
        "assets/img/Portfolio/portfolio-screenshot.png",
        "A modern, responsive portfolio website built with Angular and TypeScript. Features a clean design with a sidebar navigation, project showcases, detailed project views, and an about section. Deployed on GitHub Pages with proper routing and fallback handling.",
        [
            new Text("", false, [
                { text: "Technologies used:" },
                { text: "", isNewline: true },
                { text: "• Built with Angular 12+ and TypeScript" },
                { text: "", isNewline: true },
                { text: "• Responsive design with mobile-first approach" },
                { text: "", isNewline: true },
                { text: "• Clean, modern UI with smooth animations" },
                { text: "", isNewline: true },
                { text: "• GitHub Pages deployment with proper routing" },
                { text: "", isNewline: true },
                { text: "", isNewline: true },
                { text: "Source code available at: " },
                { text: "GitHub Repository", isLink: true, url: "https://github.com/BogdanDumbravean/portfolio" }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Automated Stock Information",
        "assets/img/Faculta/RPA/Screenshot 2022-03-01 222341.png",
        "Team project done in UiPath for automated screen capture from stock information websites. The application can recieve emails with the stocks' identifiers, after which it calculates if the stock is on an upward trend, and it sends a reply with the result, as well as other important information.",
        [
        ]
    ),
    new Project(
        "Intelligent Crowd Behaviour",
        "assets/img/Faculta/Licenta/Screenshot 2022-05-28 121938.png",
        "A 3D simulation of a stadium evacuation done in Unity. The scenarios are done following real life planning, with a combination of behaviours for the AI agents.",
        [
        ]
    ),
    new Project(
        "University Job Formular",
        "assets/img/Practica/Screenshot 2022-03-01 221720.png",
        "As practical work, we had to develop websites for the university. Our team had the task of creating a website for teachers that apply to the university to complete a formular and upload their documents. Worked in the front-end, back-end, and database, however I was the representative of the backend team.",
        [
        ]
    ),
    new Project(
        "Activities Management",
        "assets/img/Faculta/MA/Images/Looks/Preview.png",
        "Mobile application done individually for a course. Used for organising daily activities quickly. Realised in both flutter and kotlin. Works with a server database when connected to the internet, and saves data locally for offline interaction.",
        [
            new ImgPath("assets/img/Faculta/MA/Images/Looks/Update.png", false, "400px"),
            new ImgPath("assets/img/Faculta/MA/Images/Looks/OfflineWarning.png", false, "400px")
        ]
    ),
    new Project(
        "Movie Rental",
        "assets/img/Faculta/MPP/MPP.png",
        "Web application for managing the rental of movies realised in a two-man team. Front-end done in Angular, back-end in Java, and different versions for different databases.",
        [
        ]
    ),
    new Project(
        "Raytracer",
        "assets/img/Faculta/VR/Screenshot 2022-03-01 222923.png",
        "A physics application of rays and reflections for rendering a simple 3D scene. Multiple images are created from different angles of the scene. Project realised in C#.",
        [
        ]
    ),
    new Project(
        "Acrophobia Helper",
        "assets/img/Faculta/VR/Screenshot 2022-03-01 225758.png",
        "Unity project with the purpose of helping people suffering from fear of heights. The user can use the virtual environment to gradually ascend on a board, at their own pace.",
        [
        ]
    ),
    new Project(
        "Slideshow",
        "assets/img/Faculta/Web/Screenshot 2022-03-01 214921.png",
        "Simple web application displaying a slideshow. Small project made for further stabilising my basics of web development.",
        [
        ]
    ),
    new Project(
        "Informative Fill and Lee Algorithms",
        "assets/img/Liceu/Atestat/Screenshot 2022-03-01 225303.png",
        "Visual C# application made in highschool explaining two algorithms: the Fill and the Lee. Apart from theory that explains how and when to use the algorithm, specific problems are presented with a step by step animation for each algorithm.",
        [
        ]
    ),
    new Project(
        "Biology Quiz",
        "assets/img/Liceu/appbio.png",
        "Helpful quiz for students that want to test their biology skills, done in highschool. The questions are imported from previous years of the \"Bacalaureat\" exam from Romania. Presents a test with multiple-choice questions.",
        [
        ]
    ),
    new Project(
        "Mini Paint",
        "assets/img/Liceu/paint.png",
        "A basic recreation of paint from my highschool days. Has a number of features of the paint application, including undo and redo.",
        [
        ]
    )
]

export const GAMES: Project[] = [
    new Project(
        "Fish Fantasy",
        "assets/img/Games/FishFantasy/FishFantasy.jpg",
        "A mobile fishing game featuring intuitive touch controls and progression mechanics. Players can explore different fishing locations, catch various fish species, and upgrade their equipment. Built with a focus on relaxing gameplay and beautiful visuals.",
        [
            new Text("", false, [
                { text: "Game Features:" },
                { text: "", isNewline: true },
                { text: "• Intuitive touch-based fishing mechanics" },
                { text: "", isNewline: true },
                { text: "• Multiple fishing locations to explore" },
                { text: "", isNewline: true },
                { text: "• Equipment upgrade system" },
                { text: "", isNewline: true },
                { text: "• Variety of fish species to catch" },
                { text: "", isNewline: true },
                { text: "• Relaxing gameplay experience" },
                { text: "", isNewline: true },
                { text: "", isNewline: true },
                { text: "Platform: Mobile (Android)" }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Carl",
        "assets/img/Games/Carl.png",
        "Winner of the GetCrEAtive hackathon, this game was done in a three-man team in 24h. It's a side-view 2D racing game, but with a twist. This is better to show, not tell 😉",
        [
            new ImgPath("assets/img/Games/Carl.mp4", true)
        ]
    ),
    new Project(
        "Procedural Village Generation",
        "assets/img/Faculta/Master/unnamed.png",
        "Although not a game by itself, this project was intended for game development. It's a gamified approach on village procedural generation, making use of suggestions to let the designer maintain more control over the creation process.",
        [
            new Text("", false, [
                { text: "You can read more about the research at:" },
                { text: "", isNewline: true },
                { text: "Game Developer Article", isLink: true, url: "https://www.gamedeveloper.com/blogs/human-ai-interaction-improves-the-design-process" },
                { text: "Research Paper", isLink: true, url: "http://dx.doi.org/10.13140/RG.2.2.23595.92966/1" }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Little Knight",
        "assets/img/Games/LK/Screenshot_20190701-213821.png",
        "My first released game, for android devices. Side-view 2D fantasy game with a knight stranded on a flying island. The game is not on Google Play anymore because I haven't updated it after new rules have been enforced regarding ads",
        [
        ]
    ),
    new Project(
        "Book of Heroes",
        "assets/img/Games/BookOfHeroes/Book of Heroes.png",
        "Team-made game in 3D, featuring the jourey of a mage that fights to save his city from monsters. With this game, we won an award at a national competition.",
        [
        ]
    ),
    new Project(
        "Board of Heroes",
        "assets/img/Games/IMG-20200308-WA0000.jpg",
        "A game started with a team, that has sadly been left unfinished. It's a different take on auto-chess games, realised in 3D.",
        [
        ]
    ),
    new Project(
        "Flying Jousting",
        "assets/img/Games/Flying Jousting/Screenshot 2022-05-28 124705.png",
        "Imagine jousting, but in 3D. A multiplayer game where you fly on your horse to defeat your opponents, the arena being the inside of a cube. First multiplayer project I made, implementing rooms for players, a scoreboard, and a lot of fun.",
        [
        ]
    ),
    new Project(
        "Friends",
        "assets/img/Games/FriendsGame/Screenshot 2022-05-28 130558.png",
        "A fun little project that has as main characters me and my friends. The time is set during our high school days, and has us fighting with all the disciplines.",
        [
        ]
    )
]