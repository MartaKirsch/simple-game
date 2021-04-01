import GlobalStyle from 'theme/GlobalStyle';
import Wrapper from 'components/Wrapper';
import Board from 'views/Board';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Wrapper>
        <Board/>
      </Wrapper>
    </div>
  );
}

export default App;
