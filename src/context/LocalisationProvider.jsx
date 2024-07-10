import { createContext, useState } from 'react';
import translations from './translations';

export const LocalisationContext = createContext();

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState('sp');

  return (
    <LocalisationContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LocalisationContext.Provider>
  );
};

export default LocalisationProvider;
