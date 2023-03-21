---
sidebar_position: 9
---

# `lib/`

# The `lib/` Folder in Next.js

The `lib/` folder is a common location to store utility functions, data fetching functions, and other code that is not specific to a particular page or component in a Next.js project. The `lib/` folder can be used to organize your code and make it easier to maintain and reuse across different parts of your application.

Here are some common types of code that you might store in the `lib/` folder:

- **Utility functions:** You can store utility functions that are used across your application in the `lib/` folder. For example, you might create a `lib/utils.js` file that contains functions for formatting dates or numbers, or functions for validating input.

- **Data fetching functions:** You can store data fetching functions in the `lib/` folder, especially if they are used across multiple pages or components. For example, you might create a `lib/api.js` file that contains functions for fetching data from an API, or a `lib/db.js` file that contains functions for interacting with a database.

- **Third-party libraries:** If you are using third-party libraries in your application, you might store them in the `lib/` folder to make it easier to manage them. For example, you might create a `lib/axios.js` file that exports an instance of the Axios library with some default settings.

- **Constants or configuration:** You might store constants or configuration settings in the `lib/` folder. For example, you might create a `lib/constants.js` file that exports constants such as API endpoints or environment variables, or a `lib/config.js` file that exports configuration settings for your application.

By default, the `lib/` folder is not included in the Next.js build output, so any code stored in this folder will not be bundled or included in the final build of your application. However, you can customize the Next.js build process to include specific files or folders in the build output if necessary.

Overall, the `lib/` folder can be a useful tool for organizing and maintaining code that is shared across your application in a Next.js project.

