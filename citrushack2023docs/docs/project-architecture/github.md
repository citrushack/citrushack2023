---
sidebar_position: 2
---

# `.github/`

under this directoy we have all our `.yml` files.

The files in this directory are **automatically** recognized by github and are run using github actions 

I created 2 files, `cypress.yml`, and `main.yml` (2 CI actions) to run 2 separate tests **everytime** someone pushes or makes a pull request to the citrushack2023 repository

## Motivation?

Every developer has his or her own style of coding and this causes many problems when working collaboratively. We want our repository to have the same style of coding to make it readable and most importantly understandable.

CI/CD effectively achieves this by making sure any code pushed to the repository match the rules you have set for the repository.
