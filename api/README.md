# Baby Games API

#### Capstone Project for Epicodus, 10.05.17

_**By Max Scher**_

## Description

This application is an API which accesses a database hosted at mLab.com. The app generates a local server used to make said database available to API callers. The app currently works in conjunction with the [Dad Helper](https://github.com/maxobaxo/dad-helper), which provides a React view-layer that powers the app's official GUI.

The API is built to process `GET`, `PUSH`, `PUT`, and `DELETE` requests, rounding out basic CRUD functionality.

## Setup/Installation

`cd ~/Desktop`  
`git clone https://github.com/maxobaxo/dad-helper-api`  
`cd dad-helper-api`  
`npm install`  
`npm run start`

You should receive a message in the terminal that reads `Express server listening on port 3000`, which means the server is up and running and the API can now process requests.

## Technical Specifications

- It can successfully process `GET`, `PUSH`, `PUT`, and `DELETE` requests at each of the following URLs:
  - https://localhost/ages
  - https://localhost/skills
  - https://localhost/games

## Wishlist

- Expand the database at mLab.com to include a much larger set of data to work with.

## Technologies Used

[Express](https://expressjs.com/) | [Body-Parser](http://www.senchalabs.org/connect/bodyParser.html) | [Mongoose](http://mongoosejs.com/) | [MongoDB](https://www.mongodb.com/) |

## License Information

This web application is free to use under the MIT License &copy; Max Scher
