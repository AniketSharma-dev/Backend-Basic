# Basic Express Application

## Overview

This is a basic Node.js application built using **Express** and **EJS**. It sets up a simple web server with a few routes and renders views using EJS.

## Project Structure

The project uses the following structure:

- `app.js`: The main file that sets up the Express server and routes.
- `views/`: The directory where EJS templates are stored.

## Installation

1. Clone the repository to your local machine.
2. Install dependencies by running:

   ```bash
   npm install
   ```

## Scripts

**start**: Starts the application using nodemon. Run the following command to start the server:

```bash
npm start
```
`

## Dependencies

- **express**: Web framework for Node.js.
- **ejs**: Templating engine used to render views.
- **morgan**: Logger middleware to track HTTP requests for easier debugging.


## Routes

- **/**: Displays a "Hello World" message rendered by the `index.ejs` file.
- **/about**: Displays a simple "About Page" message.
- **/profile**: Displays a simple "Profile Page" message.


## Middleware

In this application, we use middleware to manage requests and responses more effectively.


### What is Middleware?

Middleware functions in Express are functions that get executed before the final route handler sends a response. They are used to add functionality to the request-response cycle, like logging, authentication, and data processing. Each middleware function receives the `req`, `res`, and `next` parameters.


### Middleware Used in This Project

- **Morgan** (Third-party Middleware): We use Morgan to log details of each request. It helps with tracking requests for easier debugging.

- **Custom Middleware**: There’s also an example custom middleware that logs a calculation result and demonstrates how to chain middleware functions. This middleware can be set up for all routes or applied to specific routes.


### Example

Here's an example route using middleware:

```javascript
app.get("/", (req, res, next) => {
    const a = 2;
    const b = 3;
    console.log(a + b);
    next();  // Calls the next middleware or final route handler
}, (req, res) => {
    res.render("index");
});
```

This middleware adds a calculation before moving to the next function in the request-response cycle.
