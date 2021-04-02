import styled from 'styled-components';

const Field = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:${(props)=>(`${(30/props.n)-1+(props.n-3)*0.25}`)}vw;
  height:${(props)=>(`${(30/props.n)-1+(props.n-3)*0.25}`)}vw;

  border-radius:20px;
  background-color:var(--yellow);
  cursor:pointer;

  position:relative;
  z-index:1;

  &::after
  {
    content:'';
    background-color:var(--yellowL);
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    z-index:-1;
    border-radius:20px;
    transition:opacity 0.2s ease-out;
  }

  &:hover::after
  {
    opacity:1;
  }
`;

export default Field;
