# Assignment 2 - Web API.

Name: Theo Pakieser

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Feature 1 
 + Feature 2 
 + Feature 3 
 + etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration
.env in react-movies
---------------------------------
REACT_APP_TMDB_KEY=
FAST_REFRESH=false
REACT_APP_BACKEND_URL=http://localhost:3001/api/movies
---------------------------------

.env in movies-api
---------------------------------
NODE_ENV=development
PORT=3001
HOST=localhost
MONGO_DB=
TMDB_KEY=
SECRET=
------------------------------------

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app. 

## References
https://clerk.com/blog/building-a-react-login-page-template