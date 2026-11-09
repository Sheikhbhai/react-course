# React Assignment - Igniting Our App! ( Namaste-React )

## NOTE For Igniting Our App: Minify —> Optimization —>Clean console —> Bundle

## What is NPM ?
NPM Stand for package Manger. 
it's manage packegs and dependency.
we use package manger know as npm or yarn

## What is `Parcel/Webpack`? Why do we need it
parcel/webpack is a  bundler.
Bundler is a tool that bundel our app, 
so it can shippied to production.

## What is parcel-cache ?
.parcel-cache is a cache directory created by Parcel bundler. It stores previously processed files and build information to speed up subsequent builds and development. It can be safely deleted because Parcel can regenerate it automatically.

## what is npx ?
NPX is a package execution tool that comes with npm. It allows developers to execute Node.js package binaries without necessarily installing them globally.

## What is difference between `dependencies` vs `devDependencies`
dependencies = My application needs this to work.
devDependencies = I need this tool to develop or prepare my application.

## What is Tree Shaking?
Tree shaking is a process of removing the unwanted code that
we do not use while developing the application.

In computing, tree shaking is a dead code elimination
technique that is applied when optimizing code.

## What is Hot Module Replacement?
Hot Module Replacement is a feature where Parcel watches files for changes and 
updates only the modified modules in the browser without reloading the entire page.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
Hot module replacement = continue watching over project for changes and update the modified module in the browser without reloading the entire page 
File watcher Algorithum = it's written in c++ watch the file continues and if anything is change build new bild
Bundling = it's build over project for dev and as well as production and each time with the help of cache take very minimum time
Minifing code = compress over code for prodction ready
Cleaning our code = cleaning over code and removing unwanteds comment
Tree shaking = its a techniqe to use eliminate dead code for optimizing code
Zero Config = for run parcel we not need to changes configuration just run npx parcel index.html 

##  What is `.gitignore`? What should we add and not add into it?
.gitignore is a fill used by git. it use to prevent unwanted file push to githud and go for build.

## What is the difference between `package.json` and `package-lock.json`
in package.json we have generic version information of installed packages .
whearas in package-lock.json we have details information or excat version information of our details installed packeges 

## Why should I not modify `package-lock.json`?
You should generally not manually modify package-lock.json because it is automatically managed by npm.

## What is `node_modules` ? Is it a good idea to push that on git?
node_modules is a folder created by npm that contains all the packages and dependencies required by your project to run.
no it's not a good idea to push becouse 

large size 
it's easily regenrate using packaj.json
performance issue 

## What is the `dist` folder?
bundler create this folder it's process over code and make a optimized files inside the dist

## - What is `browserlists`
browserlists provide for which browser and version over code working fine 

## Read about dif bundlers: vite, webpack, parcel
A bundler is a tool that takes all the files and dependencies in your project (JavaScript, CSS, images, etc.), processes them, and prepares them to run efficiently in the browser.

-> Parcel is a bundler that requires very little configuration. It automatically detects and processes many types of files.
-> Webpack is a powerful module bundler that gives developers extensive control over how files are processed and bundled.
-> Vite is a modern frontend build tool that provides a fast development server and production build system.






