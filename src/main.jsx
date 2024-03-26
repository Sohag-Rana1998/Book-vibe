import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import ErrorPage from './Components/ErrorPages/ErrorPage';
import Home from './Components/Home/Home';
import Root from './Components/Layout/Root';

import PagesToRead from './Components/PagesToRead/PagesToRead';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/BookList/ListedBooks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('./booksData.json'),
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: '/blogs',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/book-details/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../public/booksData.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
