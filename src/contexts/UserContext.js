import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { SIGNIN, URL } from '../routes/RoutesConstant';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [originalUsername, setOriginalUsername] = useState('');
  const [originalEmail, setOriginalEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const url = URL;

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        const response = await axios.get(`${url}/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          const { username, email, image } = response.data;
          setUsername(username);
          setEmail(email);
          setOriginalUsername(username);
          setOriginalEmail(email);
          setImage(image);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [url]);

  const handleUpdate = async () => {
    setError(null);
    setSuccess(false);
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      const updatedData = { username, email, image };

      const response = await axios.put(`${url}/user/${userId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSuccess(true);
        setUsername(username);
        setEmail(email);
        setOriginalUsername(username);
        setOriginalEmail(email);
        setIsChanged(false);
      }
    } catch (error) {
      console.error(error);
      setError('Failed to update account');
    } finally {
        setLoading(false);
    }
  };

  const confirmAction = async (actionType) => {
    const token = localStorage.getItem('token');

    if (actionType === 'logout') {
      localStorage.removeItem('token');
      navigate(SIGNIN);
    } else if (actionType === 'delete') {
      if (!token) return;
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      try {
        const response = await axios.delete(`${url}/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate(SIGNIN);
        }
      } catch (error) {
        console.error(error);
        setError('Failed to delete account');
      }
    }
  };

  return (
    <UserContext.Provider value={{
        originalEmail,
        originalUsername,
        setUsername,
        setEmail,
        username,
        email,
        image,
        loading,
        error,
        success,
        isChanged,
        setImage,
        setIsChanged,
        handleUpdate,
        confirmAction,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
