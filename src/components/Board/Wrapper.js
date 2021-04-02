import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  align-items:space-between;
  justify-content:space-between;
  flex-wrap:wrap;
  width:${(props)=>(`${30+(props.n-3)*1}`)}vw;
  height:${(props)=>(`${30+(props.n-3)*1}`)}vw;
  margin:6vw 0 0;
  position:relative;
`;

export default Wrapper;
