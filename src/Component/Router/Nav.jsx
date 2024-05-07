import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div>
        <nav className="navbar navbar-dark text-light">
        
        <Link to='/login'>Login</Link>
        <Link to='/'>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/course">Course</Link>
        <Link to="/help">Help</Link>
        <Link to="/error">Error</Link>
        <Link to="/d_user/asansol">Asansol</Link>
        </nav>
        </div>
    )
}
export default Nav;
