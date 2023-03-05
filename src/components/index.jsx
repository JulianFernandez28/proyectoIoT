import { StyledMaceta } from "./index.style";
import { StyledWater,StyledGota,StyledWaterGota } from "./index.style";



const Maceta = ({water}) => {

  const percentage= (250*water)/100
  
  return <StyledMaceta>
   <StyledWater height={percentage}></StyledWater>
    
  </StyledMaceta>
}

export default Maceta;