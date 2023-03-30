import styled from "@emotion/styled";

export const StyledMaceta = styled.div`
  width: 200px;
  height: 250px;
  background-color: brown;
  border-radius: 50% / 10% 10% 50% 50%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction:column-reverse;
  `

export const StyledWater = styled.div`
  width: 200px;
  background: rgb(2,0,36);
background: linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(25,25,128,1) 13%, rgba(0,212,255,1) 100%);
  border-radius: 50% / 10% 10% 50% 50%;
  position: relative;
  overflow: hidden;
  height: ${props => props.height}px;
  transition: height 3s ease-in-out;
  
  `

