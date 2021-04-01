import { useState, useEffect } from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Wrapper from 'components/Wrapper';
import Board from 'views/Board';
import Context from 'components/Context';
import { createRoutes } from 'utils/createRoutes.js';

function App() {

  const [d, setD] = useState([]);
  const [p, setP] = useState([]);

  useEffect(()=>{
    const [newD, newP] = createRoutes();
    setD(newD);
    setP(newP);
  },[]);

  const values = {d, setD, p, setP};
  return (
    <div className="App">
      <GlobalStyle/>
      <Context.Provider value={values}>
        <Wrapper>
          <Board/>
        </Wrapper>
      </Context.Provider>
    </div>
  );
}

export default App;
