import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {message} from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate();

  const handleLogout = async () => {
    try {
      // Call the logout controller endpoint
      const response = await axios.post('http://localhost:8080/api/v1/users/logout');

      if (response.ok) {
        
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        message.success('User successfully logged out');
      } else {
        message.error('Logout failed');
      }
    } catch (error) {
      message.error('Error occurred during logout');
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/users/login', {
        email,
        password,
      });
      message.success("Loggein Succesfully");
      setIsLoggedIn(true);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...Response.user, password: "" })
      );
      console.log(response.data);
      navigate('/');
    } catch (error) {
       message.error("Invalid Credentials");
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Emaol</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/register">
                  Not a user ? Click Here to regsiter !
                </Link>
                {isLoggedIn ? (
        <button type="submit" onClick={handleLogout}>Logout</button>
      ) : (
        <button type="submit" onClick={handleLogin}>Login</button>
      )}
      </form>
    </div>
  );
};

export default Login;
