# Assignment 2 - Web API

**Name:** Theo Pakieser

## Features

A bullet-point list of the ADDITIONAL features implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features):

- Feature 1: New API endpoint to fetch movies with specific criteria from MongoDB.
- Feature 2: Parameterized API endpoint for fetching detailed actor information.
- Feature 3: Integration of simple signup and login functionality with token-based authentication.
- Feature 4: Enhanced error handling for API responses.
- Feature 5: Optimized database queries for improved performance.

## Setup Requirements

Follow these steps to set up the app locally after cloning the repository:

1. Clone the repository:  
   ```bash
   git clone https://github.com/theopakieser/web-api-ca.git
   cd web-api-ca


## API Configuration
.env in react-movies
---------------------------------
REACT_APP_TMDB_KEY=your-tmdb-key
FAST_REFRESH=false
REACT_APP_BACKEND_URL=http://localhost:3001/api/movies
----------------------------------

.env in movies-api
---------------------------------
NODE_ENV=development
PORT=3001
HOST=localhost
MONGO_DB=your-mongo-db-connection-string
TMDB_KEY=your-tmdb-key
SECRET=your-secret-key

------------------------------------

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

JWT (JSON Web Tokens): Used for authenticating users.
Protected Routes:
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/movies/mustWatch" element={<WatchListPage/>} />
              <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />

## Integrating with React App
Views Updated:
Now playing movies page, Upcoming movies page: Fetches reviews from the backend API.

Authentication: Added login and signup forms to manage user sessions

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app. 
