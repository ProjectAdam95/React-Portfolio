# React Portfolio

Welcome to the React Portfolio by Adam Todorovic. This project showcases a variety of my web development projects and acts as a hub for users to explore my work, contact me, and download my resume.

## :ledger: Index

- [About](#beginner-about)
  - [File Structure](#file_folder-file-structure)
  - [Build](#hammer-build)
  - [Deployment](#rocket-deployment)
- [Community](#cherry_blossom-community)
  - [Contribution](#fire-contribution)
- [Resources](#page_facing_up-resources)
- [Gallery](#camera-gallery)
- [Credit/Acknowledgment](#star2-creditacknowledgment)
- [License](#lock-license)

## :beginner: About

The React Portfolio is a personal website created to showcase my development projects. It includes an About section, Portfolio, Contact page, and Resume download. The app is developed using React, Tailwind CSS, and deployed on Netlify.

### Features include:

- Clean UI and responsive layout for all devices.
- Projects section that links to the deployed applications and GitHub repositories.
- Resume download link.
- Contact form with validation and error handling.
- Clickable social media icons (GitHub, LinkedIn, and Twitter).
- Tailwind CSS for styling.
- React Router for navigation.

### :file_folder: File Structure

Below is a view of the file structure:

```plaintext
REACT-PORTFOLIO/
my-new-portfolio
│
├── dist/                       # Output directory after build
├── node_modules/               # Project dependencies
├── public/
│   └── assets/
│       └── images/             # Image assets for the website
├── src/
│   ├── components/             # Reusable components
│   │   ├── App.jsx             # Main app component
│   │   ├── Footer.jsx          # Footer component with social links
│   │   ├── Header.jsx          # Header component with navigation
│   │   ├── HeroSection.jsx     # Hero section on the homepage
│   │   ├── LayoutWrapper.jsx   # Layout wrapper component
│   │   ├── Navigation.jsx      # Navigation component for links
│   │   └── Project.jsx         # Project card component
│   ├── pages/                  # Individual pages
│   │   ├── About.jsx           # About me page
│   │   ├── Contact.jsx         # Contact page with form
│   │   ├── Portfolio.jsx       # Portfolio page displaying projects
│   │   └── Resume.jsx          # Resume page with download link
│   ├── index.jsx               # Entry point for React
│   ├── Routes.jsx              # Application routing
│   ├── styles.css              # Global CSS styles
├── .gitignore                  # Files to ignore in version control
├── eslintrc.config.js          # ESLint configuration for code quality
├── index.html                  # HTML file for the root of the project
├── package-lock.json           # Locked dependencies
├── package.json                # Project metadata and dependencies
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Project documentation (this file)
├── tailwind.config.js          # Tailwind CSS configuration
└── vite.config.js              # Vite configuration for development

```
## :hammer: Build

- **React** for building the front end of the portfolio.
- **Tailwind CSS** for a clean, responsive UI design.
- **React Router** for seamless navigation between pages.
- **ESLint** for code linting and code quality enforcement.
- **Vite** as a fast development server and build tool for optimized production builds.

### Commands:
- **Installation**: Install `npm install` to install the dependencies.
- **Development**: Run `npm run dev` to start the development server.
- **Build**: Run `npm run build` to generate the production-ready build.
- **Preview**: Run `npm run preview` to serve the production build locally.

## :rocket: Deployment

This project is deployed using **Netlify**. You can view the live portfolio by visiting the link below:

- [Deployed Site](https://ubiquitous-dango-446db2.netlify.app)

To use this as a template and deploy your own website or project yourself, follow these steps:

1. **Push the code to GitHub**: Ensure your project repository is on GitHub.
2. **Create a site on Netlify**:
   - Go to [Netlify](https://netlify.com) and sign in or create an account.
   - Click on **New Site from Git** and connect it to your GitHub repository.
3. **Configure the build settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist/`
4. **Deploy the site**: Once connected, Netlify will automatically deploy your site when you push changes to the main branch.

## :fire: Contribution

Your contributions are welcome and appreciated. Here's how you can contribute:

### 1. **Report a bug**
If you come across a bug, please let me know by creating an issue [here](https://github.com/ProjectAdam95/React-Portfolio/issues).

### 2. **Request a feature**
If you have an idea that you think would improve the project, feel free to request it [here](https://github.com/ProjectAdam95/React-Portfolio/issues). 

### 3. **Create a pull request**
If you want to contribute code:
- Fork the repository.
- Create a new branch.
- Submit a pull request with your proposed changes.

## :page_facing_up: Resources

- **VS Code**: Main code editor used for building this project.
- **Git Bash**: For version control and managing Git commands.

## :camera: Gallery

Here’s a preview of the portfolio page showcasing the project:

- [Portfolio Screenshot](https://imgur.com/a/mLPCCAy)

## :star2: Credit/Acknowledgment

This project was created by Adam Todorovic to showcase web development work and experience using React and other web technologies.

## :lock: License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
