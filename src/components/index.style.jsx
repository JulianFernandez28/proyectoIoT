import styled from "@emotion/styled";

export const StyledMaceta = styled.div`
  background-color:color(255,255,255);
  height: 250px;
  width: 100px;
  border:  1px solid black;
  display: flex;
  flex-direction:column-reverse;
  `

export const StyledWater = styled.div`
  background-color: blue;
  height: ${props => props.height}px;
  width: 100px;
  transition: height 3s ease-in-out;
  
  `