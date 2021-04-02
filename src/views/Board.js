import { useRef, useState, useEffect, useContext } from 'react';
import Wrapper from 'components/Board/Wrapper';
import Field from 'components/Board/Field';
import Player from 'components/Board/Player';
import Context from 'components/Context';
import gsap from 'gsap';
import { getRoute } from 'utils/getRoute.js';

const Board = () => {

  const boardRef = useRef(null);
  const playerRef = useRef(null);
  const [currentField, setCurrentField] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const { p, n } = useContext(Context);

  const movePlayer = async (x,y,duration=0) => {
    const player = playerRef.current;
    await gsap.to(player, {x:x,y:y,duration:duration,onComplete: ()=>{

      return true;
    }
    });
  };

  const getCenterOfField = (num) => {

    const fields = boardRef.current.querySelectorAll('.field');
    const player = playerRef.current;
    const field = fields[num];

    const fieldWidth = field.offsetWidth;

    const playerWidth = player.offsetWidth;

    const difference = (fieldWidth/2) - (playerWidth/2);
    return [difference+field.offsetLeft,difference+field.offsetTop]
  };

  const handleClick = async (e) => {
    if(!isMoving)
    {
      setIsMoving(true);
      const num = e.target.dataset.num;

      const route = getRoute(currentField,num,p);
      //console.log(route);

      for (const field of route)  {
        //console.log(field);
        const [x,y] = getCenterOfField(field);
        const end = await movePlayer(x,y,.5);

        if(field===route[route.length-1])
        {
          setIsMoving(false);
        }
        setCurrentField(field);
      };

    }
  };

  useEffect(()=>{
    //position the player
    const [x,y] = getCenterOfField(currentField);
    movePlayer(x,y);
  },[n]);

  //create fields
  let fields=[];
  for(let i=0;i<n*n;i++)
  {
    fields.push(<Field key={i} data-num={i} id={`field_${i}`} className="field" onClick={handleClick} n={n}></Field>)
  }

  return(
    <Wrapper ref={boardRef} n={n}>
      <Player ref={playerRef} n={n}/>
      {fields}
    </Wrapper>
  )
};

export default Board;
