---
sidebar_position: 11
---

# `public/`

# The `public/` Folder in Next.js

The `public/` folder is where you store static assets, such as images, fonts, and other files that are used by your Next.js application. These assets are served directly by the web server, rather than being bundled with your application code like dynamic assets.

Here are some common types of files and folders that you might find in the `public/` folder:

- **Images:** You can store images in the `public/` folder and reference them in your JSX files using a special URL path, such as `/image.png`. Next.js automatically optimizes images to improve performance and reduce file size.

- **Fonts:** You can store font files, such as `.woff` or `.woff2` files, in the `public/` folder and reference them in your CSS files using a `@font-face` declaration.

- **Other files:** You can store other types of files in the `public/` folder, such as PDFs or CSVs, and reference them in your JSX or CSS files using a special URL path.

By default, the contents of the `public/` folder are copied to the root of the build output when you run `next build`. This means that you can reference static assets using the same URL paths in development and production environments.

Overall, the `public/` folder is a convenient and flexible way to manage static assets in a Next.js project. By organizing your assets carefully and referencing them correctly in your code, you can create a performant and visually appealing application that delivers a great user experience.
