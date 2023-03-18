---
sidebar_position: 4
---

# `.husky/`

# Husky Pre-Commit Hook

Husky is a popular Git hook tool that allows you to automate tasks before committing changes to a Git repository. One of the most common use cases for Husky is to set up a pre-commit hook that runs a script or series of scripts to check your code for errors or enforce code formatting rules.

The pre-commit hook is triggered automatically whenever you run the `git commit` command, and allows you to catch potential issues before they are committed to the repository. For example, you can use a pre-commit hook to run linters or code formatters, to ensure that all code committed to the repository meets a certain standard.

To set up a pre-commit hook with Husky, you can simply add a `"pre-commit"` script to the `"scripts"` section of your `package.json` file, and specify the command or series of commands that you want to run. For example:

```json
{
  "scripts": {
    "pre-commit": "npm run lint && npm run test"
  }
}

