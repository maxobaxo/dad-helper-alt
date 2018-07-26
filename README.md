# Dad Helper

#### Baby Tips for Clueless Dads | 07.15.2018

_**By Max Scher**_

## Description

This web application is designed to help new dads find meaningful ways to engage their child based on age and current developmental phase. The app works in tandem with the [Dad Helper API](https://github.com/maxobaxo/dad-helper-api), which communicates with a mongoDB database at [mLab.com](https://www.mLab.com).

_*Current version of this app is deployed via heroku at [Dad-Helper](https://dad-helper.herokuapp.com/)*_

## User Stories

- User can submit the age-range of their baby to receive a list of skills the baby may currently exhibit.
- User can select one or more of the returned skills and click 'submit' to receive a list of games that they can play with their baby to enhance and utilize the aforementioned skills.

## Screenshot(s)

![Screenshot](/screenshots/home.png "Main App Screenshot")

<details>
<summary>View All</summary>
<br>
<img src="./screenshots/results.png?raw=true" />
</details>

## Setup/Installation

In Terminal...
`git clone https://github.com/maxobaxo/dad-helper-alt`  
`cd dad-helper-alt`  
`npm install`  
`npm run start`

`cd ..`  
`git clone https://github.com/maxobaxo/dad-helper-api`  
`cd dad-helper-api`  
`npm install`  
`npm run start`

In your browser, visit `https://localhost:8080`, and begin filling out the form.

## Wishlist

- Expand the database at mLab.com to include a much larger set of data to work with.
- Add user authentication to create personalized user accounts information.
  - Create functionality for users to save returned games that they like to their profile.
  - Add ability to save data for multiple children.
- Add user ability to contribute games to the database, crowdsourcing it!

## Technologies Used

[React JS](https://reactjs.org/)  
[Redux](http://redux.js.org/)  
[Express JS](https://expressjs.com)
[MongoDB](https://mongodb.com)
[React-Toolbox](https://react-toolbox.io/)  
[Webpack](https://webpack.github.io/)  
[Babel](https://babeljs.io/)  
[Jest](https://facebook.github.io/jest/)  
[Isomorphic Fetch](https://github.github.io/fetch/)

## Known Bugs / To-Do List

1.  404 Error for favicon.
2.  `selected` attribute for `<select>` tag in AgeForm.jsx is deprecated, and there is no protection against submitting form with invalid value of 'Select an Age Range'.

## License Information

This web application is free to use under the MIT License &copy; Max Scher
