# Citrus Hack 2023
[![CI](https://github.com/citrushack/citrushack2023/actions/workflows/main.yml/badge.svg)](https://github.com/citrushack/citrushack2023/actions/workflows/main.yml)
[![Run Cypress tests](https://github.com/citrushack/citrushack2023/actions/workflows/cypress.yml/badge.svg)](https://github.com/citrushack/citrushack2023/actions/workflows/cypress.yml)

> Author: Minsoo Kim

This is the codebase for Citrus Hack 2023. Below is a short project description and a guide for setting up a local environment to run the project locally for development purposes

## Leads
### Minsoo Kim

<img align="left" src="public/readme/minsoo.png" alt="image of Minsoo Kim" width="100" height="100">

Hey I'm Minsoo! I'm a software engineer based in California. I like to weightlift or boulder after a long day of coding :) You can connect with me on [LinkedIn](https://www.linkedin.com/in/minsookime/) or my [Github](https://github.com/minsooerickim).

<br/>

### Paulian Le

<img align="left" src="public/readme/paulian.png" alt="image of Paulian Le" width="100" height="100">

Hello hello! I'm Paulian. I'm a software engineer based in Southern California. In my free time, I love to boulder and to watch movies. My favorite film has to be "La La Land" at the moment. :) 🎵 Feel free to connect with me on my [LinkedIn](https://www.linkedin.com/in/paulianle/). Cheers!

<br/>
<br/>

## Tech Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
## Prerequisites

#### Windows

- **[Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701):** This is used to navigate through the project/repo and to run the development server.
- **[Ubuntu WSL](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6) (Recommended):** This is to use the bash terminal found in Linux. I recommend using a WSL to use Linux commands for developing this project. Follow [this guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to install

#### All OSes

- Install **[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)**
- Install **[Node.JS](https://nodejs.org/en/)**
- Install **[Yarn](https://yarnpkg.com/getting-started/install)**
  - Run the following command to install: `npm install --global yarn`
- Install a code editor of your choice (e.g [VScode](https://code.visualstudio.com/), [Atom](https://atom.io/), [Sublime](https://www.sublimetext.com/), etc.)
- Install at least two popular browsers (e.g. Chrome, Firefox, Safari, etc.). This is for testing for cross compatibility for different browsers

## Setting Up Your Local Environment

Run the following commands in a terminal

### Forking

> Forking the repo to work on your own code

- Fork the repo by clicking the `Fork` button in the upper right corner
  - This creates a copy of the repository in your own account

### Clone the Project

- `git clone <forked_repo_link>`
- `cd citrushack2023`
  - This is to navigate into the directory generated for the cloned repo
- If you are using VScode, run `code .` to open the current directory in VScode (this is mainly for easier navigation)
  - You may need to install **code** so run `sudo apt install code`

### Install Necessary Packages

- `yarn` or `yarn install`
  - This will install all necessary packages for the project

### Run the Development Server

- `yarn dev`
- Go to http://localhost:3000/
  - This is the port where the development server is run on. Any changes you make to the code will reflect almost instantly while the server is running

## Contributing to the Project

### Creating Branches

- Create your feature branch from the `main` branch: `git branch <github-username>/<feature-description>`
  - The feature branch should only deal with one issue
  - Make sure to create multiple branches for multiple issues, each with its own issue
    - We don't encourage working on more than 2 issues at a time
- `git checkout <github-username>/<feature-description>`
- Make sure you are on the feature branch: `git branch`
- Never work on the `main` branch

### Committing Changes

- Check what files you edited: `git status`
- Adding files to commit: `git add <file-name>` or `git add .` to commit all files
- Commit files: `git commit -m <useful-message>`
  - Try committing frequently and writing useful messages to describe the changes you made
- Push your changes: `git push`
  - If it's your first time pushing changes from a new branch, you may need to run `git push -u origin <branch-name>`

### Creating Pull Requests

> Make a pull request when you have code to merge

- Go to your forked repo on Github and click the "Contribute" option near the top
  - Click `Open Pull Request`
  - Compare your branch to the main branch. Then click `Create Pull Request`
  - Assign the webdev lead to review your code (see the righthand side)
  - NEVER merge your own PR! (PR is short for Pull Requests)
  - Leave a comment if you want to. Then click `Create Pull Request`

### Reviewing Pull Requests

- Code reviews are just as important as the code itself
- Head over to the Pull Requests tab and review the changes
  - Leave comments if you have questions/suggestions/concerns
- DON'T merge the code even after you have reviewed the code
  - One of the web dev lead will do a final review and do the merging

### Fetching Upstream

> Match your repository to the master branch

- Go to your forked repo on Github and click the "Fetch upstream" option near the top
- Click `Fetch and Merge` to fetch the master branch and merge the master code into your repo
  - This will merge any new changes made in the master branch into your repo
  - I recommend committing any of your changes to your forked repo before doing this, so you can see if there will be any conflicts

### Assigning Yourself to Issues

> Issues are tasks to be done for the project

- Go to the repo on Github and open the "Issues" tab
  - This acts as a taskboard for what needs to be done for the project
- Click on an issue to read more information about it
- If you want to work on an issue, assign yourself to the issue (see the righthand side)
