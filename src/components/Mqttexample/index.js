
import React from 'react';

import { useMqttState, useSubscription } from 'mqtt-react-hooks';

const MqttExample= () =>{
    /*
   * Status list
   * - Offline
   * - Connected
   * - Reconnecting
   * - Closed
   * - Error: printed in console too
   */
  const { connectionStatus, client  } = useMqttState();

  function handlePublish() {
    return client.publish('planta', "te gustan los patos?")
  };

  const {message}= useSubscription(['planta'])
  return <div>
    <h1>{`Status: ${connectionStatus}`}</h1>
    <p>{message?.message}</p>
    <button type='button' onClick={handlePublish}>Publicar</button>
  </div> 
}

export default MqttExample;