import React from 'react';

const Login = () => {
  return (
    <form className="login">
      <p>Member Login:</p>
      <ul className="login">
        <li>
          <label className="color">Username:</label>
          <input type="text" />
        </li>
        <li>
          <label className="color">Password:</label>
          <input type="Password" />
        </li>

        <li className="login__button">
          <button>Login</button>
        </li>
      </ul>
    </form>
  );
};
export default Login;
