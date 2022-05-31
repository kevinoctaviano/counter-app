import { createContext, useState } from 'react';
import CounterApp from './Counter';
import ReactSwitch from 'react-switch';

//Style
import './Theme.css'
// import Form from './Form';

//Declare component context
export const ThemeContext = createContext(null);

// function App() {
//   return (
//     <CounterApp />
//   );
// }

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <h2 className='sign'>Kevin Octaviano</h2>
        {/* <Form /> */}
        <CounterApp />
        <div className='switch'>
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
