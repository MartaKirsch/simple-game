import { useState, useEffect } from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Wrapper from 'components/Wrapper';
import Board from 'views/Board';
import Context from 'components/Context';
import { createRoutes } from 'utils/createRoutes.js';
import { createArrays } from 'utils/createArrays.js';

function App() {

  const [d, setD] = useState([]);
  const [p, setP] = useState([]);
  const [n, setN] = useState(5);

  useEffect(()=>{
    const arrays = createArrays(n);
    const [newD, newP] = createRoutes(arrays[0],arrays[1]);
    setD(newD);
    setP(newP);
  },[n]);

  const values = {d, setD, p, setP, n, setN};
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
