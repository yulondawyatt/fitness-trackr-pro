import { useAuth } from '../auth/AuthContext';
import { usePage } from './PageContext';
import { NavLink } from 'react-router';

/** Navbar with site navigation links */
const Navbar = () => {
  const { token, logout } = useAuth();
  const { setPage } = usePage();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to='/'>Activities</NavLink>
        {token ? (
          <NavLink to=''>Log out</NavLink>
        ) : (
          <>
            <NavLink to='/auth/'>Register</NavLink>
            <NavLink to='/Login'>Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

  export default Navbar;