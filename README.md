# JavaScript Server - Course assessment 1

# Introduction

This application is a web-based platform that allows users to view and interact with memes. The application has a login functionality, allowing users to access additional features such as seeing the details of each meme.

## Installation

To install the application, follow these steps:
 
    1. Clone the repository to your local machine.
    2. Navigate to the project directory.
    3. Run npm install to install the project dependencies.
    4. Set the API_URL environment variable to the Imgflip API URL.

### This web application makes use of the following:

    - Node.js
    - Express.js
    - EJS
    - Bootstrap
    - Bootstrap-Icons
    - jQuery
    - Passport.js
    - Typed.js
    - Express-session
    - Express-session-json

## Usage

To run the application, run the following command:

`
npm start
`

Once the application is running, users are navigated to the homepage to view the available memes. Guests can only see the basic information about each meme, while logged-in users can view more detailed information about each meme.

Users are stored in data/users.json, with username and password information. Session storage is saved using express-session and express-session-json to data/session.json, holding the id of memes that the user has accessed through the detailed page. This will restore to a default session after logging out of the application.

## APIs
The app uses [Imgflip API's](https://imgflip.com/api) free version to fetch data and generate a table with 100 meme templates.