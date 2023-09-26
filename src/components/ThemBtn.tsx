import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemContext';

const ThemBtn = () => {
  const {  toggleTheme } = useContext(ThemeContext);

  const handleToggleClick = () => {
    toggleTheme();
  };

  return (
<div className='themBtn'>
  <input type="checkbox" id="toggle_checkbox" onClick={handleToggleClick} />
  <label htmlFor="toggle_checkbox">
    <div id="star">
      <div className="star" id="star-1">★</div>
      <div className="star" id="star-2">★</div>
    </div>
    <div id="moon" />
  </label>
</div>
  );
};

export default ThemBtn;