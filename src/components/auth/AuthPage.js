import { useState, useRef, useContext } from 'react';

import { login, signup } from '../../dummy-api/auth-api';
import { AuthContext } from '../../store/auth-context';

function AuthPage() {
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [error, setError] = useState(null);

  function switchAuthModeHandler() {
    setIsLoggingIn((wasLoggingIn) => !wasLoggingIn);
  }

  async function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let authenticate = isLoggingIn ? login : signup;

    try {
      const response = await authenticate(enteredEmail, enteredPassword);
      authCtx.authenticateUser(response.token);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <section id="auth-form">
      <form onSubmit={submitFormHandler}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            minLength={6}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button className="btn">
          {isLoggingIn ? 'Log in' : 'Create user'}
        </button>
      </form>
      <button className="btn-alt" onClick={switchAuthModeHandler}>
        {isLoggingIn ? 'Create a new user' : 'Log in with existing user'}
      </button>
    </section>
  );
}

export default AuthPage;
