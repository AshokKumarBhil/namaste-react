# namaste-react-episode-2 

## NPM is not stands for Node Package Manager but basically it is a package manager.

-> npm comes bundled with Node.js by default.
-> It has mainly two components Registry and CLI.
-> Registry is place where all JavaScript packages exist.
-> Developers can install update and manages those packages through CLI like NPM install , NPM update etc.

## What will happen when you run npm init in blank folder ?

-> npm initiate for that folder.
-> asks interactive questions like name , version , description , author , entry point , license etc in terminal.
-> Based on our answers this will create package.json.
-> Wait ! you can skip this interactive session by npm init -y.

## What is Package.json ?
-> It is a description of your project like name , version , description , author , license , dependency etc.
-> It is also describing the very important property , versioning of packages. It describe version range of a packages using caret (^) and 
   tilde(~).
-> In this package we writes our scripts , for our convenience.

## What is meaning of ^(caret) ?
-> npm update only minor release.
-> React's current relase -> ^19.1.1 
-> Npm update only these version [19.1.1 - 19.9.9]
-> 20.0.0 would be a breaking change. So using ^ be can avoid breaking changes.

## what is meaning of ~(tilde) ?
-> npm update only patch or bug fixes releases.
-> React's current relase -> ~19.1.1
-> Npm update only these version [19.1.1 - 19.1.9]

## what will happens when we run npm install react react-dom ?
-> npm will fetch package form npm registry and save to a newly created folder node_module folder.
-> It will also create a file names package-lock.json.
-> It will update dependencies in package.json.

## What is package-lock.json ?
-> It contain snapshot of our project dependencies and their exact versions.
-> It has Integrity hash for each dependency.

## What is `node_modules` ? Is it a good idea to push that on git?
-> node_modules folder is created by npm.
-> It is place where npm download all our dependency locally.
-> It is created when we run npm install first time if it is not exists.
-> It is not good ideas to push that on github because it can very heavy. Github will hate. and We can 
   reproduce it then what it make sense to upload it. Just like we can stream uploaded songs from youtube than what make sense to download it.

## What is the `dist` folder?
-> dist folder is created by bundler.
-> In this folder bundler put production builds.

## What is `browserlists`

## What is `Parcel/Webpack`? Why do we need it?

## What is `.parcel-cache`

## What is `npx` ?

## What is difference between `dependencies` vs `devDependencies`

## What is Tree Shaking?

## What is Hot Module Replacement?

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.

## What is `.gitignore`? What should we add and not add into it?

## What is the difference between `package.json` and `package-lock.json`

## Why should I not modify `package-lock.json`?

## What is `node_modules` ? Is it a good idea to push that on git?

## What is `browserlists`