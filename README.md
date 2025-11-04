# Password Bin

This is a clean, responsive password manager app I built with my bare hands, without using AI. It might not be a big deal right now, but building this myself has given me more development knowledge than I would have if I built it using AI.

I also containerized the application using Docker, learning how to write and deploy web apps.

<img width="1888" height="880" alt="image" src="https://github.com/user-attachments/assets/f74733a4-9702-4fc8-9a76-594bff4d429f" />

<img width="500" height="844" alt="image" src="https://github.com/user-attachments/assets/ca8e6fe2-bb9f-4944-af48-f21d1c48bae6" />

## Features

*   Temporarily store and manage passwords or other secrets.
*   Copy secrets to the clipboard with a single click.
*   Clean and responsive user interface.
*   Containerized with Docker for easy deployment.

## Technologies Used

*   **Framework:** [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Lottie](https://lottiefiles.com/)
*   **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
*   **Unique IDs:** [UUID](https://github.com/uuidjs/uuid)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v16 or later)
*   [Docker](https://www.docker.com/) (optional, for running in a container)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2.  **Navigate to the `password-bin` directory and install dependencies:**

    ```bash
    cd password-bin
    npm install
    ```

### Running the Application

*   **To run the development server:**

    ```bash
    npm run dev
    ```

*   **To build the application for production:**

    ```bash
    npm run build
    ```

*   **To run the application in a Docker container:**

    1.  **Build the Docker image:**

        ```bash
        docker build -t password-bin .
        ```

    2.  **Run the Docker container:**

        ```bash
        docker run -p 5173:5173 password-bin
        ```