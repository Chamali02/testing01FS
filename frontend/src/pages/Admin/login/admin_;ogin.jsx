import './admin_login.css'; 
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import Cookies from 'js-cookie';
import NavigationBar from '../../../components/navigation';





const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

   console.log(email);
   console.log(password);

 if(email== 'admin@gmail.com' && password == "pass"){
    navigate("/admin/add-user");
 }
 else{
    alert('Wrong credentials');
 }
  };

  return (
    <>
      <NavigationBar/>
      <div className="sign-up-page">
        <div className="sign-up-content">
          
          <div className="sign-up-form">
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            
             
              <button type="submit" className="sign-up-button">Login</button>
            
            </form>
          
          </div>
        </div>
      </div>
    </>
  );
};


export default AdminLogin;
