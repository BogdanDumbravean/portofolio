# Bogdan Dumbrăvean - Portfolio

A personal portfolio website built with Angular to showcase my software engineering projects, game development work, education, and hobbies.

## 🚀 Features

*   **Project Showcase**: Detailed views for Programming projects and Games developed.
*   **About Section**: Education timeline and Hobbies/Interests.
*   **Responsive Design**: Fully responsive layout using Bootstrap and custom CSS.
*   **Modern Architecture**:
    *   **Lazy Loading**: Feature modules (`PortfolioModule`, `AboutModule`) are loaded on demand for better performance.
    *   **Service-Based Data**: Centralized `ProjectService` using RxJS Observables for data management.
    *   **Dynamic Titles**: Browser tab titles update automatically based on navigation.
*   **Rich Content**: Supports mixed media (images, videos) and rich text descriptions.

## 🛠️ Tech Stack

*   **Framework**: Angular 13
*   **Language**: TypeScript
*   **Styling**: CSS3, Bootstrap
*   **Build Tool**: Angular CLI
*   **Runtime**: Node.js (Compatible with Node 20+ via overrides)

## ⚙️ Setup & Installation

This project requires **Node.js** and **npm**.

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```
    *Note: The `package.json` includes an override for `memfs` to ensure compatibility with Node 20+.*

3.  **Run Development Server**
    ```bash
    npm start
    ```
    Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

4.  **Build for Production**
    ```bash
    npm run build
    ```
    The build artifacts will be stored in the `dist/` directory.

## 📂 Project Structure

The application is structured into feature modules:

*   **AppModule**: Core application shell and layout.
*   **PortfolioModule** (Lazy Loaded):
    *   `ProgrammingComponent`: List of software projects.
    *   `GamesComponent`: List of game development projects.
    *   `ProjectDetailComponent`: Dynamic detail view for any project.
*   **AboutModule** (Lazy Loaded):
    *   `EducationComponent`: Academic timeline.
    *   `HobbiesComponent`: Personal interests.

## 👤 Author

**Bogdan Dumbrăvean**
*   Software Engineer & Game Developer
*   [LinkedIn](https://www.linkedin.com/in/bogdan-dumbravean/)

---
*Generated with Angular CLI version 13.2.4.*
