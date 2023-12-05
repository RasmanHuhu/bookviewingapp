import { NavLink, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div id="page">
      <h1> Amigos Bibliotek </h1>
      <div id="container">
        <NavLink to="add">Add book</NavLink> |
        <NavLink to="find"> Find book</NavLink> |
        <NavLink to="all"> All books</NavLink> |
        <NavLink to="/"> Home </NavLink>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
