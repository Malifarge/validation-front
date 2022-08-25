import { Link } from "react-router-dom";

const Nav = () => {
    return <nav className="flex aic jcsb">
        <p className="bold fs-25">Users list</p>
        <div>
            <Link to={'/'}>Users</Link>
            <Link to={'/New'}>New user</Link>
        </div>
    </nav>
  }
  
  export default Nav