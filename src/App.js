import {Diyas,Diyas1} from './Diyas.js';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Diyas/>,
  },
  {
    path: "/replit",
    element: <Diyas1/>,
  }
]);

function App() {
  return (
    <div>
    <RouterProvider router={router} />
      </div>
  );
}

export default App;
