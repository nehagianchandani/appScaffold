angularjs-app-scaffold
======================
This is a template for an AngularJS application that uses NodeJS as a development environment, Gulp as a taskrunner, and Sass Bootstrap (compiled via libass).  

The application structure follows Best Practice Recommendations for Angular App Structure:

https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub


Usage
=====
1. Download the repository, and move it to your working directory
2. Open a terminal and cd to the angular-app-scaffold directory in your working directroy
3. Type: **npm install**
4. To build the app, type: **gulp build** (Development and Dist versions of js and css files will be injected as script and link tags into the index.html pages of each respective version, so there is no need to manually include them).
5. To serve the app on localhost, type: **gulp serve** (This will launch the app in your default browser on port 3000, watch for any changes to application files (js, html, scss), rebuild the app with changes, and reload the changes in the browser.
6. Edit app.config.js to configure the application module name and routes (Note the application module name also needs to be changed in the **js** task in gulpfile.js)
7. Changing the angular-app-scaffold directory name will not affect the application, and should be changed for each new application


TODO
====
Add tasks for testing
