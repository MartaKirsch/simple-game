import styled from 'styled-components';

const Player = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:${(props)=>(`${(30/props.n)-6+(props.n-3)*0.75}`)}vw;
  height:${(props)=>(`${(30/props.n)-6+(props.n-3)*0.75}`)}vw;
  border-radius:20px;
  position:absolute;
  background-color:black;
  z-index:2;
`;

export default Player;
