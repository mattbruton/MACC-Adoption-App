# Unofficial MACC Adoption App

This project was used as my Front-end Capstone at Nashville Software School. Goals with the project were to improve certain aspects of the original site, such as having a cohesive theme throughout application and making navigation more intuitive.

==============================

- Viewing/Downloading Project
    - [To View Hosted Project](#to-view-hosted-project)
    - [Installation](#installation)
    - [To Run](#torun)
- Specifications and Project Information
    - [Languages] (#languages)
    - [Tools] (#tools)
    - [Screenshots](#screenshots)
    - [Current Issues](#current-issues)

==============================

## Viewing/Downloading Project

### To View Hosted Project

[Unofficial MACC Adoption App](https://mb-nss-exercises.firebaseapp.com/MACC/)

### Installation

Clone the repository from GitHub:

`git clone https://github.com/mattbruton/MACC-Adoption-App.git`

Navigate to the project from the directory it was cloned into:

`cd MACC-Adoption-App/`

### To Run

If you need a command line http server, to install http-server globally:

`npm install http-server -g`

Install project dependencies:
`npm install` 
then:
`bower install`

Then:

`http-server` or `http-server -p XXXX` (the X's represent the port of your choice)

You should now be able to open your browser and type `localhost:8080` to view the project.

## Specs and Project Information

### Languages

1. JavaScript
1. HTML
1. CSS

### Tools / Frameworks

1. [AngularJS](https://angularjs.org/)
1. [Sass](http://sass-lang.com/)
1. [gulp](http://gulpjs.com/)
1. [Git](https://git-scm.com/)
1. [Atom](https://atom.io/)
1. [NPM http-server](https://www.npmjs.com/package/http-server)

### Screenshots

![Pet Results Mobile View](https://raw.githubusercontent.com/mattbruton/MACC-Adoption-App/master/img/petresult-mobile-ss.png)
![Pet Search Mobile View](https://raw.githubusercontent.com/mattbruton/MACC-Adoption-App/master/img/petsearch-mobile-ss.png)
![Pet Results Browser View](https://raw.githubusercontent.com/mattbruton/MACC-Adoption-App/master/img/browser-search-result.png)

### Current Issues

==============================

1. E-mail service no longer working correctly in hosted project, need to investigate and correct issue.
1. Styling is inconsistant across certain devices and browser resolutions.
1. Search button in navigation doesn't work as expected if currently searching pets. (Should refresh page)

==============================
