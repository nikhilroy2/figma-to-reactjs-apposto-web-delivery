import React, { useContext } from 'react';
import './App.css';

import Base from './Layout/Base/Base';
import { HeaderContext } from './Layout/Header/Header';
import Section1 from './Components/Section1/Section1';
export const UseContext = React.createContext();



function App() {
  const data = useContext(HeaderContext);
  console.log(data)
  return (
    <UseContext.Provider value={{ name: 'Nikhil Dev' }}>
      <div className="App">
        <div className="page_container">
          <Base>
            <Section1></Section1>
          </Base>
        </div>
      </div>
    </UseContext.Provider>

  );
}

export default App;
