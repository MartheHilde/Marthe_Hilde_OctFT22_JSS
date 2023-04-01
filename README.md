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
    - jQuery
    - Passport.js

## Usage

To run the application, run the following command:

`
npm start
`

Once the application is running, users can navigate to the homepage to view the available memes. Guests can only see the basic information about each meme, while logged-in users can view more detailed information about each meme. Users data is stored in a users.json file.

## APIs
The app uses [Imgflip API's](https://imgflip.com/api) free version to fetch data and generate a table with 100 meme templates.