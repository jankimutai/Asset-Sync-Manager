import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const updateUserData = (newUserData) => {
    console.log('Updating user data:', newUserData);
    setUser(newUserData);
    localStorage.setItem('userData', JSON.stringify(newUserData));
  };

  useEffect(() => {
    console.log('Effect triggered');
    const storedUser = localStorage.getItem('userData');
  
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      fetch('http://127.0.0.1:5555/session_user')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.statusText);
          }
        })
        .then((data) => {
          setUser(data);
          localStorage.setItem('userData', JSON.stringify(data));
        })
        .catch((error) => {
          console.error('Error fetching user data:', error.message);
        });
    }
  }, [refresh, navigate]);
  const triggerRefresh = () => {
    console.log('Triggering refresh');
    setRefresh((prevRefresh) => !prevRefresh);
  };

  const login = (userData) => {
    console.log('Logging in:', userData);
    setUser(userData);
    triggerRefresh();
    localStorage.setItem('userData', JSON.stringify(userData));
  };
  const logout = () => {
    localStorage.removeItem('userData');
    fetch('http://127.0.0.1:5555/logout', {
      method: 'DELETE',
    })
      .then(() => {
        setUser(null);
        Swal.fire({
          icon: 'success',
          title: 'Logout Successful',
          text: 'You have successfully logged out!',
        });
      })
      .catch((error) => {
        console.error('Logout error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Logout Error',
          text: 'An error occurred during logout. Please try again later.',
        });
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, triggerRefresh, updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
