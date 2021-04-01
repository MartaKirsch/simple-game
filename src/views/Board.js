import { useRef, useState, useEffect } from 'react';
import Wrapper from 'components/Board/Wrapper';
import Field from 'components/Board/Field';
import Player from 'components/Board/Player';
import gsap from 'gsap';

const Board = () => {

  const boardRef = useRef(null);
  const playerRef = useRef(null);
  const [currentField, setCurrentField] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const movePlayer = (x,y,duration=0) => {
    const player = playerRef.current;
    gsap.to(player, {x:x,y:y,duration:duration,onComplete: ()=>{
      setIsMoving(false);
    }
    });
  };

  const getCenterOfField = (num) => {
    if(num<0||num>8)
    {
      return;
    }
    const fields = boardRef.current.querySelectorAll('.field');
    const player = playerRef.current;
    const field = fields[num];

    const fieldWidth = field.offsetWidth;

    const playerWidth = player.offsetWidth;

    const difference = (fieldWidth/2) - (playerWidth/2);
    return [difference+field.offsetLeft,difference+field.offsetTop]
  };

  const handleClick = (e) => {
    if(!isMoving)
    {
      setIsMoving(true);
      const num = e.target.dataset.num;
      const [x,y] = getCenterOfField(num);
      movePlayer(x,y,.5);
      setCurrentField(num);
    }
  };

  useEffect(()=>{
    //position the player
    const [x,y] = getCenterOfField(currentField);
    movePlayer(x,y);
  },[]);

  //create fields
  let fields=[];
  for(let i=0;i<9;i++)
  {
    fields.push(<Field key={i} data-num={i} id={`field_${i}`} className="field" onClick={handleClick}></Field>)
  }

  return(
    <Wrapper ref={boardRef}>
      <Player ref={playerRef}/>
      {fields}
    </Wrapper>
  )
};

export default Board;
