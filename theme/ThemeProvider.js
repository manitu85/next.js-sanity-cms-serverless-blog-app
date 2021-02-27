import { useState, useContext, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';
import { themes } from '.';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  // prettier-ignore
  const toggleTheme = () =>
    setTheme(theme === themes.dark
      ? themes.light
      : themes.dark);

  const themeAPI = useMemo(() => {
    return {
      theme,
      toggleTheme
    };
  }, [theme, toggleTheme]);

  return (
    // prettier-ignore
    <ThemeContext.Provider value={themeAPI}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
