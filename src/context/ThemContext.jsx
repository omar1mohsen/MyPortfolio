import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.querySelector("#nav").classList.add('dark');
      document.querySelector("#home").classList.add('dark');
      document.querySelector("#projects").classList.add('dark');
      document.querySelector("#about").classList.add('dark');
      document.querySelector("#contact").classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.querySelector("#nav").classList.remove('dark');
        document.querySelector("#home").classList.remove('dark');
        document.querySelector("#projects").classList.remove('dark');
        document.querySelector("#about").classList.remove('dark');
        document.querySelector("#contact").classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};