import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContenidoCentradoAzul = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContenidoCentradoAzul;