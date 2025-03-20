import './App.css'; // Archivo de estilos CSS
import AppRoutes from './routes/RoutesApp'; 
import React, { useContext } from 'react';
import { ThemeContext } from './themes/ThemeContext'; 

const App = () => {
  const { themeType } = useContext(ThemeContext);
  return (
    <div className={themeType}>
      <AppRoutes />
    </div>
  );
};

export default App;