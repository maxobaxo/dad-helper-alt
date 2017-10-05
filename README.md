# Get to Know Your Baby
#### Capstone Project for Epicodus, 10.05.17
_**By Max Scher**_

## Description
This web application is designed to help new parents find meaningful ways to engage their child based on age and current developmental phase.  The app currently utilizes a local run server to call the [Dad Helper API](https://github.com/maxobaxo/dad-helper-api), which hosts a database at mLab.com and was built in conjunction with this app.

## User Stories
* User can submit the age-range of their baby to receive a list of skills the baby may currently exhibit.
* User can select one or more of the returned skills and click 'submit' to receive a list of games that they can play with their baby to enhance and utilize the aforementioned skills.

## Setup/Installation
In Terminal...
`git clone https://github.com/maxobaxo/dad-helper`  
`cd dad-helper`  
`npm install`  
`npm run start`  

`cd ..`  
`git clone https://github.com/maxobaxo/dad-helper-api`  
`cd dad-helper-api`  
`npm install`  
`npm run start`  

In your browser, visit `https://localhost:8080`, and begin filling out the form.

## Technical Specifications
* It can successfully make `GET` requests to the [Dad Helper API](https://github.com/maxobaxo/dad-helper-api) in order to return a specific set of endpoints based on user form submission.
* It can hide the age form upon submission.
* It can allow user to select and submit multiple skills from the returned list.
* After making a `GET` request to the API, it can cross-reference the returned endpoints with current values in application state to update state with the only the desired new values.

## Wishlist
* Expand the database at mLab.com to include a much larger set of data to work with.
* Add user authentication to create personalized user accounts information.
  * Create functionality for users save returned games that they like to their profile.
  * Add ability to save data for multiple children.
* Add user ability to contribute games to the database, crowdsourcing it!

## Technologies Used
[React JS](https://reactjs.org/) | [Redux](http://redux.js.org/) | [React-Bootstrap](https://react-bootstrap.github.io/) | [JavaScript](https://www.javascript.com/) |
[Webpack](https://webpack.github.io/) |
[Babel](https://babeljs.io/) | [Jest](https://facebook.github.io/jest/) | [Isomorphic Fetch](https://github.github.io/fetch/)  

## Known Bugs
* 404 Error for favicon.
* `selected` attribute for `<select>` tag in AgeForm.jsx is deprecated, and there is no protection against submitting form with invalid value of 'Select an Age Range'

## License Information
This web application is free to use under the MIT License &copy; Max Scher
