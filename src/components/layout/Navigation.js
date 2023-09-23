import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../store/auth-context';

function Navigation() {
  const authCtx = useContext(AuthContext);

  function logoutHandler() {
    authCtx.logout();
  }

  let authAwareLinks = (
    <li>
      <Link to="/auth">Authenticate</Link>
    </li>
  );

  if (authCtx.token) {
    authAwareLinks = (
      <>
        <li>
          <Link to="/user">User Profile</Link>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </>
    );
  }

  return (
    <nav id="main-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {authAwareLinks}
      </ul>
    </nav>
  );
}

export default Navigation;
