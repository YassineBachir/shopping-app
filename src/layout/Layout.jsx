import { Link, Outlet } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
export default function Layout() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-4xl font-bold text-blue-600">Yasmina's Shop</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-2xl font-bold text-blue-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="min-h-screen bg-base-200 py-4 px-8">
        <Outlet />
      </div>
    </>
  );
}