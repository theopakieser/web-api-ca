import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";

import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import WatchListPage from "./pages/WatchListPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import SignUpPage from "./pages/signUpPage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";

import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/now_playing" element={<NowPlayingMoviesPage/>} />
            <Route path="/movies/popular" element={<PopularMoviesPage/>} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={ <SignUpPage /> } />
            <Route element={<ProtectedRoutes />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/movies/mustWatch" element={<WatchListPage/>} />
              <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            </Route>
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);