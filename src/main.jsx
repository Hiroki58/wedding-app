import React from 'react'
import Root from "./routes/root.jsx"
import ReactDOM from 'react-dom/client'
import Index from './routes/index.jsx'
import ErrorPage from './error-page.jsx';
import Question from './routes/question.jsx';
import About from './routes/about.jsx';
import Photo from './routes/photo.jsx';
import Playlist from './routes/playlist.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "question",
        element: <Question />,
        
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "photo",
        element: <Photo />,
      },
      {
        path: "playlist",
        element: <Playlist />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
