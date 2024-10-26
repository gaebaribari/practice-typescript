import Circle from './components/Circle';
import styled from 'styled-components';

const Container = styled.div`
    background-color : ${props => props.theme.bgColor};
    width:100px;
    height:100px;
`;



function AppTheme() {
  return (
   <Container>
   </Container>
  );
}

export default AppTheme;
