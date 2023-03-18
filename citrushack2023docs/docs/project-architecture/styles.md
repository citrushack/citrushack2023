---
sidebar_position: 12
---

# `styles/`

## The `styles/` Folder in Next.js

The `styles/` folder is where you store global styles, variables, and other CSS-related files in a Next.js project. This folder can be used to organize and manage your CSS code, and make it easier to maintain and reuse across different parts of your application.

Here are some common types of files and folders that you might find in the `styles/` folder:

- **Global CSS:** You can store global CSS styles in the `styles/` folder, such as styles for typography, layout, or color schemes. You can then import these styles into your JSX files using a special `import` statement, like `import '../styles/global.css'`.

- **CSS Modules:** Next.js supports CSS Modules, which allow you to write modular CSS styles that are scoped to a particular component or page. You can store CSS Modules in the `styles/` folder, and import them into your JSX files using a special syntax, like `import styles from '../styles/Button.module.css'`.

- **SASS or LESS files:** If you prefer to use a CSS preprocessor like SASS or LESS, you can store your SASS or LESS files in the `styles/` folder and import them into your JSX files using a special `import` statement, like `import '../styles/global.scss'`.

By default, Next.js supports CSS Modules out of the box, and automatically generates unique class names for your CSS modules to ensure that they are scoped correctly. You can also customize the CSS configuration of your Next.js project using a `next.config.js` file, which allows you to specify a custom CSS preprocessor, CSS loader, or other configuration options.

Overall, the `styles/` folder is a useful tool for managing and organizing your CSS code in a Next.js project. By carefully structuring your styles, you can create a maintainable and reusable codebase that is easy to update and extend over time.

## Our Use Case

We however use TailwindCSS to style our application, so we only have to look at the `globa.css` file when working with styles
