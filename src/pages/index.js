import Home from "@/components";
import Maceta from "@/components/index";
import MqttExample from "@/components/MqttExample";

import { useMqttState, useSubscription } from 'mqtt-react-hooks';
import { Connector } from 'mqtt-react-hooks';

const HomePage = () => {


  

  return (
    <div>
      <Maceta water={30} ></Maceta>
      {/* <Connector brokerUrl="ws://broker.hivemq.com:8000/planta"> */}
      <Connector brokerUrl="ws://broker.hivemq.com:8000/mqtt">
        <MqttExample></MqttExample>
      </Connector>
    </div>
  );
};

export default HomePage;