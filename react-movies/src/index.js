import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favouriteMoviePage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MustWatchPage from "./pages/mustWatchPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import ProtectedRoutes from "./protectedRoutes";
import MoviesContextProvider from "./contexts/moviesContext";
import AuthContextProvider from "./contexts/authenticationContext";


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
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/movies/upcoming" element={ <UpcomingMoviesPage /> } />
            <Route path="/movies/now_playing" element={<NowPlayingMoviesPage/>} />
            <Route path="/movies/popular_movies" element={<PopularMoviesPage/>} />
            <Route element={<ProtectedRoutes />}>
            <Route path="/movies/mustWatch" element={ <MustWatchPage /> } />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />           
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={ <RegisterPage/> } />
            <Route path="/profile" element={<ProfilePage />} />
            </Route>
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