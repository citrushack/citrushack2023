---
sidebar_position: 2
---

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
