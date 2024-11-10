import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../components/layout/mainlayout";
import Home from "../../pages/Home";
import LoginForm from "../../pages/auth/login";
import RegisterForm from "../../pages/auth/register";
import PopularMovies, {loader as popularloder, } from "../../components/movies/movies";
import MovieDetail, { movieLoader } from "../../components/movies/details";
import Favorites from '../../components/movies/favorites';
import PrivateRoute from './gourd';

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home/> },
      { path: '/login', element: <LoginForm/> },
      { path: '/register', element: <RegisterForm/> },
      { path: '/movies', element: <PopularMovies />, loader: popularloder },
      {
        path: "moviedetail/:id",
        element: <MovieDetail />,
        loader: movieLoader,
      },
      { path: "/Favorites", element: <PrivateRoute element={Favorites} /> }

    ],
  },
]);