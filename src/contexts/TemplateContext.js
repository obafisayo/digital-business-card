import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { URL } from '../routes/RoutesConstant';
import { useCardContext } from './cardContext';

const TemplateContext = createContext();

const TemplateProvider = ({ children }) => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { cardData } = useCardContext();
  const [person, setPerson] = useState(cardData);

    useEffect(() => {
        if (cardData) {
            setPerson(prevPerson => ({
                ...prevPerson,
                ...cardData
            }));
        }
    }, [cardData])
    useEffect(() => {
        if (cardData) {
        }
        const fetchTemplates = async () => {
            setIsLoading(true);
            const token = localStorage.getItem('token')
            try {
                const response = await axios.post(`${URL}/card/templates`, person, {
                    headers: {
                        Authorization: `Bearer ${token}"}`
                    }
                });
                setTemplates(response.data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTemplates();
    }, [person, cardData]);

  const values = {
    templates,
    isLoading,
  };

  return (
    <TemplateContext.Provider value={values}>
      {children}
    </TemplateContext.Provider>
  );
};

const useTemplateContext = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplateContext must be used within a TemplateProvider");
  }
  return context;
};

export { TemplateProvider, useTemplateContext };
