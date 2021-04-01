import { useRef } from 'react';
import Wrapper from 'components/Board/Wrapper';
import Field from 'components/Board/Field';
import Player from 'components/Board/Player';

const Board = () => {

  const boardRef = useRef(null);

  //create fields
  let fields=[];
  for(let i=0;i<9;i++)
  {
    fields.push(<Field key={i} data-num={i} id={`field_${i}`}></Field>)
  }

  return(
    <Wrapper ref={boardRef}>
      {fields}
    </Wrapper>
  )
};

export default Board;
