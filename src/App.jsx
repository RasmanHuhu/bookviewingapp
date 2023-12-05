import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import HomePage from "./layout/HomePage";
import AddPage from "./pages/AddPage";
import FindPage from "./pages/FindPage";
import AllBooksPage from "./pages/AllBooksPage";
import NoMatch from "./components/NoMatch";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
        <Route path="add" element={<AddPage />} />
        <Route path="find" element={<FindPage />} />
        <Route path="all" element={<AllBooksPage />} />
        <Route path="*" element={<NoMatch />} />
          
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
