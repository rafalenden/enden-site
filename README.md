# Personal Website (enden.com)

This is the source code for my personal website, a simple static site linking to my GitHub and LinkedIn profiles.

## Tech Stack

*   HTML
*   CSS
*   [browser-sync](https://browsersync.io/) (for development)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) and npm (or a compatible package manager like yarn)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/rafenden/enden-com.git
    cd enden-com
    ```
2.  Install the development dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server with live reloading:

```bash
npm start
```

This will serve the website at `http://localhost:8000` and automatically open it in your default browser. The server will watch for changes in HTML, CSS, and JS files and reload the page automatically.

## Deployment

This site is intended to be deployed as static files on a web server or a static hosting platform (e.g., GitHub Pages, Netlify, Vercel).
