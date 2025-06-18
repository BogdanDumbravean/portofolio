import { ImgPath, Project, Text, RichTextSegment } from "./project.model";

export const PROGRAMMING: Project[] = [
    new Project(
        "Metacognis Research Assistant",
        "assets/img/Metacognis/Metacognis.png",
        "A React-based web application for AI-driven research paper analysis, developed as a freelance front-end developer in a two-man team.",
        [
            new Text("", false, [
                { text: "Developed as a freelance front-end developer, the application uses AI to search and analyze research papers based on user-defined criteria, providing tailored results to assist users in their research." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• AI-driven search and analysis of research papers" },
                { text: "", isNewline: true },
                { text: "• User-friendly React-based front-end for seamless interaction" },
                { text: "", isNewline: true },
                { text: "• Collaboration with a back-end developer for integration" },
                { text: "", isNewline: true },
                { text: "• Responsive design for accessibility across devices" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Metacognis/Metacognis.png", false, "400px"),
            new Text("", false, [
                { text: "This project highlights my ability to work as a freelance front-end developer and collaborate effectively in a team." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "AI-Powered Teacher Assistant",
        "assets/img/PopTechSmartGrades/ClassView.png",
        "A React and Node.js application developed in a 4-man team for a hackathon, winning second place in its category.",
        [
            new Text("", false, [
                { text: "This project was developed during a 3-day hackathon in a 4-man team. The application uses AI to assist teachers in managing their classes, analyzing student performance, and generating actionable insights for improvement." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• AI-driven analysis of student performance and class trends" },
                { text: "", isNewline: true },
                { text: "• Suggestions for improvement based on test results" },
                { text: "", isNewline: true },
                { text: "• Automatic generation of new tests targeting weak points" },
                { text: "", isNewline: true },
                { text: "• React-based front-end for intuitive user interaction" },
                { text: "", isNewline: true },
                { text: "• Node.js back-end for robust data handling and AI integration" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/PopTechSmartGrades/StudentView.png", false, "400px"),
            new Text("", false, [
                { text: "Winning second place in its category, this project demonstrates my ability to work under pressure, collaborate in a team, and deliver innovative solutions using AI." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Conference Management",
        "assets/img/Faculta/ISS/Login.png",
        "Application for managing the stages of a conference, made in a team. I was chosen as team leader, so I had knowledge of the whole application, but my main tasks were in the back-end and the database.",
        [
            new Text("", false, [
                { text: "This project was developed as part of a team effort to manage the stages of a conference. The application includes features for user authentication, session management, and database integration." },
                { text: "", isNewline: true },
                { text: "As the team leader, I oversaw the entire development process, ensuring smooth collaboration and task distribution. My primary focus was on back-end development and database design." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• User authentication and role-based access control" },
                { text: "", isNewline: true },
                { text: "• Session scheduling and management" },
                { text: "", isNewline: true },
                { text: "• Database integration for storing conference data" },
                { text: "", isNewline: true },
                { text: "• Responsive design for web accessibility" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Faculta/ISS/Login.png", false, "400px"),
            new ImgPath("assets/img/Faculta/ISS/Dashboard.png", false, "400px"),
            new ImgPath("assets/img/Faculta/ISS/SessionManagement.png", false, "400px"),
            new Text("", false, [
                { text: "The application was built using React, .NET Core and an SQL Server database and follows best practices for software development. It was a valuable learning experience in team collaboration and project management." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Bolts and Gears",
        "assets/img/Liceu/FTC.png",
        "Participated in the inaugural season of FTC in Romania, where our team designed, built, and programmed a robot, qualifying for the national phase.",
        [
            new Text("", false, [
                { text: "Bolts and Gears was part of the inaugural season of the FIRST Tech Challenge (FTC) in Romania. The competition involved multiple stages, starting with gathering funds and resources, followed by designing and building the robot, and culminating in a national-level contest between teams." },
                { text: "", isNewline: true },
                { text: "Our team successfully qualified for the national phase, showcasing our robot's capabilities and teamwork. My primary responsibility was programming the robot's software, but I also contributed significantly to the physical construction of the robot." },
                { text: "", isNewline: true },
                { text: "Key Highlights:" },
                { text: "", isNewline: true },
                { text: "• Programming the robot's autonomous and manual control systems" },
                { text: "", isNewline: true },
                { text: "• Collaborating with teammates to design and build the robot" },
                { text: "", isNewline: true },
                { text: "• Participating in fundraising and resource management" },
                { text: "", isNewline: true },
                { text: "• Competing at the national level and gaining valuable experience" },
                { text: "", isNewline: true },
                { text: "You can see the current state of the team at: " },
                { text: "Bolts and Gears", isLink: true, url: "https://www.facebook.com/boltsngears" }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Personal Portfolio Website",
        "assets/img/Portfolio/portfolio-screenshot.png",
        "A modern, responsive portfolio website showcasing my projects and professional journey, built with Angular and TypeScript.",
        [
            new Text("", false, [
                { text: "This portfolio website is designed to showcase my programming projects, games, and professional journey. It features a clean, modern UI with smooth animations and responsive design." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Built with Angular 12+ and TypeScript for dynamic and modular development" },
                { text: "", isNewline: true },
                { text: "• Responsive design with a mobile-first approach" },
                { text: "", isNewline: true },
                { text: "• Sidebar navigation for easy access to different sections" },
                { text: "", isNewline: true },
                { text: "• Project showcases with detailed views" },
                { text: "", isNewline: true },
                { text: "• About section highlighting my skills and education" },
                { text: "", isNewline: true },
                { text: "• Deployed on GitHub Pages with proper routing and fallback handling" },
                { text: "", isNewline: true },
                { text: "• SEO optimization for better visibility" },
                { text: "", isNewline: true },
                { text: "• Structured data (JSON-LD) for enhanced search engine indexing" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Portfolio/portfolio-screenshot.png", false, "400px"),
            new ImgPath("assets/img/Portfolio/portfolio-about.png", false, "400px"),
            new ImgPath("assets/img/Portfolio/portfolio-projects.png", false, "400px"),
            new Text("", false, [
                { text: "The website is a reflection of my skills in front-end development, UI/UX design, and full-stack integration. It serves as a platform to connect with potential collaborators and showcase my work." },
                { text: "", isNewline: true },
                { text: "Source code available at: " },
                { text: "GitHub Repository", isLink: true, url: "https://github.com/BogdanDumbravean/portfolio" }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Automated Stock Information",
        "assets/img/Faculta/RPA/Screenshot 2022-03-01 222341.png",
        "A UiPath-based automation project for analyzing stock trends and responding to email queries.",
        [
            new Text("", false, [
                { text: "This project was developed as part of a team effort to automate stock information analysis using UiPath. The application receives emails containing stock identifiers, analyzes the stock trends, and sends a reply with the results and additional insights." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Automated email processing to extract stock identifiers" },
                { text: "", isNewline: true },
                { text: "• Trend analysis to determine upward or downward movement" },
                { text: "", isNewline: true },
                { text: "• Email replies with detailed stock information and insights" },
                { text: "", isNewline: true },
                { text: "• UiPath workflows for seamless automation" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Faculta/RPA/Screenshot 2022-03-01 222002.png", false, "400px"),
            new Text("", false, [
                { text: "This project highlights the power of RPA (Robotic Process Automation) in streamlining repetitive tasks and improving efficiency in data analysis workflows." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Intelligent Crowd Behaviour",
        "assets/img/Faculta/Licenta/Screenshot 2022-05-28 121938.png",
        "A Unity-based 3D simulation of stadium evacuation scenarios, combining real-life planning and AI agent behaviors.",
        [
            new Text("", false, [
                { text: "This project simulates stadium evacuation scenarios in a 3D environment using Unity. The evacuation plans are based on real-life planning, and the AI agents exhibit a combination of behaviors to navigate the environment effectively." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Realistic stadium layouts and evacuation routes" },
                { text: "", isNewline: true },
                { text: "• AI agents with diverse behaviors, including crowd dynamics and individual decision-making" },
                { text: "", isNewline: true },
                { text: "• Unity-based implementation for immersive 3D visualization" },
                { text: "", isNewline: true },
                { text: "• Analysis of evacuation efficiency under different scenarios" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Faculta/Licenta/Screenshot 2022-05-28 121938.png", false, "400px"),
        ]
    ),
    new Project(
        "University Job Formular",
        "assets/img/Practica/Screenshot 2022-03-01 221720.png",
        "A prototype web application for teachers applying to the university, featuring document uploads and form submissions.",
        [
            new Text("", false, [
                { text: "This project was developed as part of practical work for the university. Our team created a prototype web application for teachers applying to the university, allowing them to complete a form and upload necessary documents." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• User-friendly interface for form completion and document uploads" },
                { text: "", isNewline: true },
                { text: "• Back-end integration for secure data storage and retrieval" },
                { text: "", isNewline: true },
                { text: "• Database design for efficient handling of application data" },
                { text: "", isNewline: true },
                { text: "• Responsive design for accessibility across devices" }
            ] as RichTextSegment[]),
            new Text("", false, [
                { text: "As the representative of the back-end team, I contributed to the development of the server-side logic and database integration, ensuring smooth functionality and data security. This prototype served as a foundation for further development and refinement." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Activities Management",
        "assets/img/Faculta/MA/Images/Looks/Preview.png",
        "A mobile application for quick daily activity organization, developed individually using Flutter and Kotlin.",
        [
            new Text("", false, [
                { text: "This project is a mobile application designed to help users organize their daily activities quickly and efficiently. It was developed individually as part of a course project." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Developed in both Flutter and Kotlin for cross-platform compatibility" },
                { text: "", isNewline: true },
                { text: "• Server database integration for online data synchronization" },
                { text: "", isNewline: true },
                { text: "• Local data storage for offline interaction" },
                { text: "", isNewline: true },
                { text: "• User-friendly interface for quick activity management" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Faculta/MA/Images/Looks/Update.png", false, "400px"),
            new ImgPath("assets/img/Faculta/MA/Images/Looks/OfflineWarning.png", false, "400px")
        ]
    ),
    new Project(
        "Movie Rental",
        "assets/img/Faculta/MPP/MPP.png",
        "A web application for managing movie rentals, developed in a two-person team using Angular and Java.",
        [
            new Text("", false, [
                { text: "This project is a web application designed to manage movie rentals efficiently. It was developed in collaboration with another team member, showcasing our ability to work together on a full-stack solution." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Front-end developed in Angular for a dynamic and responsive user interface" },
                { text: "", isNewline: true },
                { text: "• Back-end implemented in Java for robust server-side logic" },
                { text: "", isNewline: true },
                { text: "• Support for multiple database versions to ensure flexibility" },
                { text: "", isNewline: true },
                { text: "• User-friendly design for managing rentals, returns, and inventory" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Faculta/MPP/MPP.png", false, "400px")
        ]
    ),
    new Project(
        "Raytracer",
        "assets/img/Faculta/VR/Screenshot 2022-03-01 222923.png",
        "A physics-based application for rendering a simple 3D scene using ray tracing techniques, developed in C#.",
        [
            new Text("", false, [
                { text: "This project demonstrates the application of ray tracing techniques to render a simple 3D scene. Multiple images are generated from different angles, showcasing the physics of rays and reflections." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Implementation of ray tracing algorithms for realistic rendering" },
                { text: "", isNewline: true },
                { text: "• Support for multiple camera angles to capture the scene" },
                { text: "", isNewline: true },
                { text: "• Developed in C# for efficient computation and visualization" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Faculta/VR/Screenshot 2022-03-01 223705.png", false, "400px"),
            new Text("", false, [
                { text: "This project highlights my understanding of physics-based rendering and algorithm implementation." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Acrophobia Helper",
        "assets/img/Faculta/VR/Screenshot 2022-03-01 225758.png",
        "A Unity-based virtual reality project designed to help individuals overcome their fear of heights.",
        [
            new Text("", false, [
                { text: "This project uses virtual reality to create a safe environment for individuals suffering from acrophobia (fear of heights). Users can gradually ascend on a virtual board at their own pace, helping them build confidence and overcome their fear." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Gradual elevation in a virtual environment to reduce anxiety" },
                { text: "", isNewline: true },
                { text: "• Immersive Unity-based design for realistic experiences" },
                { text: "", isNewline: true },
                { text: "• User-controlled pace to ensure comfort and safety" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Faculta/VR/Screenshot 2022-03-01 225916.png", false, "400px")
        ]
    ),
    new Project(
        "Slideshow",
        "assets/img/Faculta/Web/Screenshot 2022-03-01 214921.png",
        "A simple web application for displaying a slideshow, developed to strengthen web development basics.",
        [
            new Text("", false, [
                { text: "This project is a basic web application designed to display a slideshow of images. It was created to reinforce my understanding of fundamental web development concepts." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Simple and clean design for image transitions" },
                { text: "", isNewline: true },
                { text: "• Lightweight implementation for fast loading" },
                { text: "", isNewline: true },
                { text: "• Developed using HTML, CSS, and JavaScript" }
            ] as RichTextSegment[]),
            new Text("", false, [
                { text: "This project helped me start on my basics in web development." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Informative Fill and Lee Algorithms",
        "assets/img/Liceu/Atestat/Screenshot 2022-03-01 225303.png",
        "A Visual C# application explaining the Fill and Lee algorithms with step-by-step animations.",
        [
            new Text("", false, [
                { text: "This project is a Visual C# application created to explain the Fill and Lee algorithms. It includes theoretical explanations and step-by-step animations for specific problems, making it an educational tool." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Detailed theory explaining the algorithms and their applications" },
                { text: "", isNewline: true },
                { text: "• Step-by-step animations for problem-solving" },
                { text: "", isNewline: true },
                { text: "• Interactive interface for better understanding" }
            ] as RichTextSegment[]),
            new Text("", false, [
                { text: "This is one of the projects that showcase my ability to create educational tools using programming." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Biology Quiz",
        "assets/img/Liceu/appbio.png",
        "A high school project featuring a quiz application for testing biology knowledge.",
        [
            new Text("", false, [
                { text: "This project is a quiz application designed to help students test their biology knowledge. The questions are sourced from previous years of the \"Bacalaureat\" exam in Romania, providing a realistic testing experience." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Multiple-choice questions sourced from real exams" },
                { text: "", isNewline: true },
                { text: "• User-friendly interface for easy navigation" },
                { text: "", isNewline: true },
                { text: "• Scoring system to track performance" }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Mini Paint",
        "assets/img/Liceu/paint.png",
        "A high school project recreating basic features of the Paint application, including undo and redo.",
        [
            new Text("", false, [
                { text: "This project is a recreation of the Paint application, developed during high school. It includes several basic features of Paint, such as drawing tools, undo, and redo functionality." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Drawing tools for creating shapes and lines" },
                { text: "", isNewline: true },
                { text: "• Undo and redo functionality for editing" },
                { text: "", isNewline: true },
                { text: "• Simple and intuitive interface" }
            ] as RichTextSegment[])
        ]
    )
]

export const GAMES: Project[] = [
    new Project(
        "Vandals",
        "assets/img/triangle-mosaic.png",
        "The project I spent my last years developing full-time and is still being developed. Includes custom shaders, Photon Fusion multiplayer, designed and optimised for mobile. Still a work in progress and under NDA until we publish it.",
        []
    ),
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
        "A side-view 2D racing game with a unique twist, developed in a three-man team during a 24-hour hackathon.",
        [
            new Text("", false, [
                { text: "This project was developed during the GetCrEAtive hackathon in a three-man team within 24 hours. Carl is a side-view 2D racing game with a unique twist that makes it engaging and fun." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Innovative gameplay mechanics that set it apart from traditional racing games" },
                { text: "", isNewline: true },
                { text: "• Fast-paced development under hackathon constraints" },
                { text: "", isNewline: true },
                { text: "• Collaborative teamwork to deliver a polished product" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Games/Carl.mp4", true),
            new Text("", false, [
                { text: "This project showcases my ability to work under pressure and deliver creative solutions in a team environment." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Procedural Village Generation",
        "assets/img/Faculta/Master/unnamed.png",
        "A gamified approach to procedural village generation, designed to give game developers more control over the creation process.",
        [
            new Text("", false, [
                { text: "This project focuses on procedural village generation for game development. It uses a gamified approach to allow designers to maintain more control over the creation process while leveraging AI suggestions." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• AI-driven suggestions for village layouts" },
                { text: "", isNewline: true },
                { text: "• Designer-friendly interface for manual adjustments" },
                { text: "", isNewline: true },
                { text: "• Research-backed implementation for practical use in game development" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Faculta/Master/unnamed.png", false, "400px"),
            new Text("", false, [
                { text: "You can read more about the research at:" },
                { text: "Game Developer Article", isLink: true, url: "https://www.gamedeveloper.com/blogs/human-ai-interaction-improves-the-design-process" },
                { text: "Research Paper", isLink: true, url: "http://dx.doi.org/10.13140/RG.2.2.23595.92966/1" }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Little Knight",
        "assets/img/Games/LK/Screenshot_20190701-213821.png",
        "A side-view 2D fantasy game featuring a knight stranded on a flying island, developed for Android devices.",
        [
            new Text("", false, [
                { text: "Little Knight is my first released game for Android devices. It is a side-view 2D fantasy game where players control a knight stranded on a flying island, battling enemies and exploring the environment." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Engaging gameplay with exploration and combat mechanics" },
                { text: "", isNewline: true },
                { text: "• Designed for Android devices with intuitive controls" },
                { text: "", isNewline: true },
                { text: "• Fantasy-themed visuals and immersive sound effects" }
            ] as RichTextSegment[]),
            new ImgPath("assets/img/Games/LK/Screenshot_20190707-085943.png", false, "400px"),
            new Text("", false, [
                { text: "Although the game is no longer available on Google Play due to ad policy changes, it remains a milestone in my game development journey." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Book of Heroes",
        "assets/img/Games/BookOfHeroes/Book of Heroes.png",
        "A 3D fantasy game developed in a team, featuring the journey of a mage fighting to save his city from monsters.",
        [
            new Text("", false, [
                { text: "Book of Heroes is a 3D fantasy game developed in a team. Players follow the journey of a mage as he battles monsters to save his city. The game won an award at a national competition, showcasing its quality and creativity." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Immersive 3D visuals and engaging storyline" },
                { text: "", isNewline: true },
                { text: "• Team collaboration to deliver a polished product" },
                { text: "", isNewline: true },
                { text: "• Award-winning design and gameplay mechanics" }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Board of Heroes",
        "assets/img/Games/IMG-20200308-WA0000.jpg",
        "A 3D auto-chess game with a unique twist, developed as part of a team but left unfinished.",
        [
            new Text("", false, [
                { text: "Board of Heroes is a 3D auto-chess game with a unique twist. Although the project was left unfinished, it showcases innovative ideas and teamwork in game development." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Unique take on auto-chess mechanics" },
                { text: "", isNewline: true },
                { text: "• Collaborative development with a team" },
                { text: "", isNewline: true },
                { text: "• 3D visuals and strategic gameplay elements" }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Flying Jousting",
        "assets/img/Games/Flying Jousting/Screenshot 2022-05-28 124705.png",
        "A multiplayer 3D jousting game where players fly on horses inside a cube-shaped arena realised with Unity and Photon Pun.",
        [
            new Text("", false, [
                { text: "Flying Jousting is a multiplayer 3D game where players fly on horses and compete in jousting matches inside a cube-shaped arena. It was my first multiplayer project, implementing rooms for players and a scoreboard." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Multiplayer functionality with player rooms and matchmaking" },
                { text: "", isNewline: true },
                { text: "• Unique cube-shaped arena for dynamic gameplay" },
                { text: "", isNewline: true },
                { text: "• Scoreboard and competitive mechanics for engaging matches" }
            ] as RichTextSegment[]),
            new Text("", false, [
                { text: "This project highlights my ability to develop multiplayer games and implement innovative gameplay mechanics." }
            ] as RichTextSegment[])
        ]
    ),
    new Project(
        "Friends",
        "assets/img/Games/FriendsGame/Screenshot 2022-05-28 130558.png",
        "A fun 2D game featuring me and my friends as characters, set during our high school days.",
        [
            new Text("", false, [
                { text: "Friends is a fun 2D game where the main characters are me and my friends. Set during our high school days, the game features us battling various disciplines in a humorous and engaging way." },
                { text: "", isNewline: true },
                { text: "Key Features:" },
                { text: "", isNewline: true },
                { text: "• Personalized characters based on real-life friends" },
                { text: "", isNewline: true },
                { text: "• Humorous gameplay with unique challenges" },
                { text: "", isNewline: true },
                { text: "• Nostalgic setting inspired by high school experiences" }
            ] as RichTextSegment[])
        ]
    )
]