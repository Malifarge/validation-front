import { Link } from "react-router-dom";

const Nav = () => {
    return <nav>
        <Link to={'/'}>Users</Link>
        <Link to={'/New'}>New user</Link>
    </nav>
  }
  
  export default Nav