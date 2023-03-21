---
sidebar_position: 1
---

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