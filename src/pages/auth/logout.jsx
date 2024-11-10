import React from 'react';
import { useNavigate } from 'react-router-dom';

const handleLogout = () => {
  const navigate = useNavigate();

  function logout() {
        localStorage.removeItem('token');
        navigate('/login');
    }

  return logout;
};

export {handleLogout};