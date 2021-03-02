import { useState, useEffect, useContext, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';
import { themes } from '.';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const [mountedComponent, setMountedComponent] = useState(false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  // prettier-ignore
  const toggleTheme = () => theme === themes.dark ? setMode(themes.light) : setMode(themes.dark)

  // const toggleTheme = () =>
  //   setTheme(theme === themes.dark ? themes.light : themes.dark);

  const themeAPI = useMemo(() => {
    return {
      theme,
      toggleTheme,
      mountedComponent
    };
  }, [theme, toggleTheme, mountedComponent]);

  return (
    // prettier-ignore
    <ThemeContext.Provider value={themeAPI}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
