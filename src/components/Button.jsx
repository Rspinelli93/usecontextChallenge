import React, { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext.jsx';

const Button = () => {
  const { themeType, setThemeType } = useContext(ThemeContext);

  const toggleTheme = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {themeType === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default Button;