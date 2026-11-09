# Class 02 – Igniting Our App

## 1. What is NPM?

NPM stands for Node Package Manager. It is a package manager for JavaScript that helps us install, manage, and update libraries and tools required for our projects.

For example:

```bash
npm install react
```

This command installs React into our project.

NPM also creates and manages files like `package.json` and `package-lock.json`.

## 2. What is Parcel/Webpack? Why do we need it?

Parcel and Webpack are JavaScript module bundlers. They help us prepare our application for development and production.

They can:
- Bundle multiple JavaScript files into optimized files.
- Process CSS, HTML, images, and other assets.
- Optimize code for production.
- Help manage project dependencies.

We need bundlers because modern applications contain multiple files and dependencies. Managing and optimizing everything manually can be difficult.

Examples:
- Parcel
- Webpack
- Vite (uses a different development and build approach)

## 3. What is .parcel-cache?

`.parcel-cache` is a folder automatically created by Parcel.

It stores previously processed files and build information so Parcel does not have to process everything again.

Benefits:
- Faster development builds.
- Faster rebuilds.
- Improved performance.

It is a cache folder, so it can be deleted safely. Parcel will recreate it when required.

## 4. What is npx?

NPX is a command-line tool provided by npm that allows us to execute package commands.

For example:

```bash
npx parcel index.html
```

This command runs Parcel without requiring us to type its full executable path.

If Parcel is installed locally in the project, NPX can use that local installation.

Difference:
- `npm` is mainly used to install and manage packages.
- `npx` is used to execute package commands.

## 5. Difference between dependencies and devDependencies

Both are used to store packages in `package.json`, but they serve different purposes.

### dependencies

These are packages required by our application at runtime.

Example:

```bash
npm install react react-dom
```

### devDependencies

These are packages required during development, testing, or building, but generally not needed to run the built application.

Example:

```bash
npm install -D parcel
```

| dependencies | devDependencies |
|---|---|
| Required by the application at runtime | Required for development and build tools |
| Installed using `npm install package` | Installed using `npm install -D package` |
| Example: React, ReactDOM | Example: Parcel, ESLint |

## 6. What is Tree Shaking?

Tree Shaking is an optimization technique used by bundlers to remove unused code from the final production bundle.

For example:

```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

If our application only uses `add()`, a bundler may remove the unused `subtract()` function from the production bundle.

Benefits:
- Smaller bundle size.
- Less unnecessary code.
- Better application loading performance.

## 7. What is Hot Module Replacement (HMR)?

Hot Module Replacement is a feature that allows developers to see code changes in the browser without manually refreshing the entire page.

For example, when we change a CSS property or update a component, Parcel can automatically update the affected module.

Benefits:
- Faster development.
- Saves time.
- Helps maintain application state in supported cases.

## 8. Five Superpowers of Parcel

My favourite five superpowers of Parcel are:

1. Hot Module Replacement (HMR)
2. Tree Shaking
3. Code Splitting
4. Minification
5. Automatic Dependency Installation and Management

### Explanation of any three

**1. Hot Module Replacement (HMR)**

Parcel automatically updates the changed part of our application in the browser without requiring a full manual refresh.

**2. Tree Shaking**

Parcel removes unused code from the production bundle to reduce its size and improve performance.

**3. Minification**

Parcel reduces the size of JavaScript, CSS, and HTML files by removing unnecessary characters and optimizing code without changing its functionality.

## 9. What is .gitignore?

`.gitignore` is a file that tells Git which files and folders should not be tracked or uploaded to a repository.

Example:

```gitignore
node_modules/
dist/
.parcel-cache/
.env
```

### What should we add?

- `node_modules/` – Installed packages.
- `dist/` – Generated production build files (when not intentionally committing build output).
- `.parcel-cache/` – Parcel cache.
- `.env` – Environment variables and secrets.

### What should we not add?

We should not ignore important project files such as:

- `package.json`
- `package-lock.json`
- Source code files.
- HTML, CSS, and JavaScript files.
- README documentation.

## 10. Difference between package.json and package-lock.json

### package.json

It contains project information, scripts, and dependency declarations.

Example:

```json
{
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
  "dependencies": {
    "react": "^18.3.1"
  },
  "devDependencies": {
    "parcel": "^2.15.0"
  }
}
```

### package-lock.json

It records the exact resolved versions of installed packages and their dependency tree.

| package.json | package-lock.json |
|---|---|
| Stores dependency version ranges | Stores exact resolved versions |
| Contains scripts and project metadata | Records the dependency installation tree |
| Usually edited by developers | Usually managed automatically by npm |

## 11. Why should I not modify package-lock.json?

We should generally avoid manually editing `package-lock.json` because npm manages it automatically.

It contains detailed information about installed package versions and dependencies.

Manually changing it can cause:
- Dependency inconsistencies.
- Installation problems.
- Unexpected package versions.

Whenever we install, update, or remove packages using npm, it automatically updates the lock file.

## 12. What is node_modules? Should we push it to Git?

`node_modules` is a folder created by npm that contains all installed packages and their dependencies.

For example, after installing React and Parcel, their package files are stored inside `node_modules`.

We should generally not push `node_modules` to GitHub because:

- It can contain thousands of files.
- It makes the repository unnecessarily large.
- Other developers can recreate it using `npm install`.

Instead, we push `package.json` and `package-lock.json`.

## 13. What is the dist folder?

`dist` stands for distribution.

It contains the optimized production version of our application generated by a bundler.

For example:

```bash
npx parcel build index.html
```

Parcel generates production files inside the `dist` folder.

These files are ready to be deployed to a web server.

## 14. What is Browserslist?

Browserslist is a configuration used by frontend tools to define which browsers our application should support.

It helps tools such as Parcel, Babel, and Autoprefixer decide how to transform or optimize code for different browsers.

Example in `package.json`:

```json
{
  "browserslist": [
    "last 2 versions",
    "> 1%"
  ]
}
```

This configuration targets recent browser versions and browsers with more than 1% usage according to the relevant compatibility data.

## 15. Read about different bundlers: Vite, Webpack, Parcel

### Parcel

Parcel is a zero-configuration bundler. It works with minimal setup and provides features such as HMR, code splitting, and production optimization.

### Webpack

Webpack is a powerful and highly configurable module bundler. It provides extensive control over loaders, plugins, and build configuration.

### Vite

Vite is a modern frontend build tool. During development, it uses native browser ES modules for fast startup and updates. For production, it uses a build process to generate optimized assets.

| Parcel | Webpack | Vite |
|---|---|---|
| Minimal configuration | Highly configurable | Simple modern setup |
| Easy to get started | More setup in many projects | Fast development server |
| Built-in features | Large plugin ecosystem | Plugin ecosystem |

## 16. What are ^ (Caret) and ~ (Tilde)?

These symbols are used in semantic versioning to define which package versions npm can install when resolving dependencies.

Example version: `^18.2.0`

### Caret (^)

Caret allows compatible updates that do not change the leftmost non-zero version component.

For example:

```json
"react": "^18.2.0"
```

It allows versions from `18.2.0` up to, but not including, `19.0.0`.

### Tilde (~)

Tilde generally allows patch-level updates within the specified minor version.

For example:

```json
"react": "~18.2.0"
```

It allows versions from `18.2.0` up to, but not including, `18.3.0`.

## 17. Read about Script Types in HTML

HTML supports different ways of loading and executing JavaScript.

### Normal Script

```html
<script src="app.js"></script>
```

The browser pauses HTML parsing while it fetches and executes the script.

### Async Script

```html
<script async src="app.js"></script>
```

The browser downloads the script while parsing HTML. It executes as soon as downloading finishes, which can pause HTML parsing.

### Defer Script

```html
<script defer src="app.js"></script>
```

The browser downloads the script while parsing HTML but executes it after HTML parsing is complete.

| Normal | Async | Defer |
|---|---|---|
| Blocks HTML parsing while loading and executing | Downloads in parallel | Downloads in parallel |
| Executes immediately when fetched | Executes as soon as ready | Executes after HTML parsing |
| Follows document position | Execution order is not guaranteed | Maintains document order |

**Important:** Both `async` and `defer` are generally used with external scripts.

---

## Conclusion

In this class, I learned how NPM manages packages, how Parcel helps us bundle and optimize our React application, and how different tools make modern frontend development easier.

I also learned about project structure, dependency management, Git, and production builds.
