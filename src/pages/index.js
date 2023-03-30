import React from "react";
import Home from "@/components";
import MqttExample from "@/components/MqttExample";
import styleContent from "./index.style";
import { useMqttState, useSubscription } from 'mqtt-react-hooks';

import { Connector } from 'mqtt-react-hooks';

const HomePage = () => {



  return (
    
    <center  >
    <div className="bg-black">
    {/* <Connector brokerUrl="ws://broker.hivemq.com:8000/planta"> */}
    <Connector brokerUrl="ws://broker.hivemq.com:8000/mqtt">
        <MqttExample></MqttExample>
      </Connector>
    </div>
      
    </center>
  );
};

export default HomePage;