# Episode 02 - Igniting our app

## Theory

### 1. What is NPM?
NPM is many things but not Node Package Manager. NPM is a Open Source package manager for javascript programming language and is the default package manager for nodejs.
NPM helps developers to share and reuse code for building their applications. It allows us in installing a package, updating, uninstalling and publishing 
a package to the NPM registry where it can be accessed by others and downloaded to use for their projects.

### 2. What is 'Parcel/Webpack'? why do we need it?
Parcel and Webpack are module bundlers, which is used to minify and clean our code for deployment. We need them to improve our application performance,
reduce overall file size by making our code compact.

### 3. What is .parcel-cache?
'.parcel-cache' stores information about our project when parcel builds it, so that when parcel rebuilds, it doesn't have to re-parse and re-analyse everything from scratch. It's the reason why parcel is so fast during development.

### 4. what is 'npx'?
'npx' stands for 'Node Package eXecute'. It is a command that is used to execute/run any package from the npm registry directly without installing it. 

### 5. What is the difference between 'dependencies' and 'devDependencies'?
Dependencies are the list of packages that are required to run our application in production or testing environment, whereas devDependencies are the packages that are required only in the project development environment.

### 6. What is Tree shaking?
Tree shaking is a technique that is used for optimizing our code performance by eliminating the dead/unused codes.

### 7. What is Hot Module Replacement?
Hot Module Replacement (HMR) adds or removes modules while an application is running, without a full reload. This helps to retain its state values, and saves valuable development time by only updating what has changed.

### 8. List down your favourite 5 superpowers of parcel and describe any 3 of them in your own words?
Superpowers of parcel:
1.) Module bundling : Parcel is a module bundler which bundles all our files and creates a development build.
2.) Hot Module Replacement(HMR) : It adds/ removes modules based on our changes while application is running, without a full reload.
3.) Application hosting : It creates a server and host our application in that server for development build.
4.) Caching
5.) Code splitting

### 9. What is '.gitignore'? What should we add and not add into it?
'.gitignore' is a file in our project that will be used to ignore the upload of unneccessary files to our github cloud repository.
We should not add our source files, images, package.json, package-lock.json files into it.
We should add our .env, node_modules, .parcel-cache, dist file into it.

### 10. What is the difference between 'package.json' and 'package-lock.json'?
'package.json' is used to give us basic details about the project and the list of dependices used to run the project.
'package-lock.json' is used to track the entire tree of dependencies(icluding dependencies of dependencies) and the exact version of each dependencies.

### 11. Why should I not modify 'package-lock.json'?
You should not modify 'package-lock.json' since it keeps track of entire tree of dependencies, modifying it may break our application.

### 12. What is 'node_modules'? Is it good idea to push that on git?
'node_modules' is the folder that consists of all the dependency packages required for our project. With the help of 'package.json' and 'package-lock.json' we can recreate the 'node_modules' to our project whenever needed, also the overall size of 'node_modules' folder will be huge so it is not a good idea to push that on git.

### 13. What is the 'dist' folder?
The dist folder consists of the minified version of our source files which will be interpreted by the server to host our application.

### 14. What is 'browserlists'?
Browserlists is a tool that is used to declare which browsers and specific versions can run our frontend applications while not providing support for others.
