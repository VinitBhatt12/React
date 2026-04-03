import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className='nav'>
        <h3>Sheryans</h3>
        <div className='nav-link'>
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='contact'>Contact</Link>
        </div>
      </div>
    )
}

export default Navbar;