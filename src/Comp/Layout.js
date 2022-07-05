import { Outlet, Link } from "react-router-dom";
import './nav.css';


const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="brand-title">FIT4U</div>
        <div className="navbar-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#About" >About</Link></li>
            <li><Link to="#Contact">Contact</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/login"><button>Login</button></Link></li>
            <li><Link to="/signup"><button>Signup</button></Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

 

export default Layout;