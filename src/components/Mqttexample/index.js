
import React from 'react';
import Maceta from "@/components/index";
import { useMqttState, useSubscription } from 'mqtt-react-hooks';
import { Planta1,Planta2,PlantaViva } from '../svg';
import ContenidoCentradoAzul from '../Contenedor';


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
    return client.publish('planta', "0")
  };

  const {message}= useSubscription(['planta'])

  var dato=parseInt(message?.message)

  function nivelHumedad(){
    if(dato>=40 && dato <=80){
      return "Humedad Suficiente"
    }else if(dato >80){
      return "Humedad Excesiva"
    }else if(dato < 40){
      return "Poca Humedad"
    }
  }

  function traerPlanta(){
    if(dato>=40 && dato <=85){
      return <PlantaViva></PlantaViva>
    }else if(dato >85){
      return <Planta1></Planta1> 
    }else if(dato < 40){
      return   <Planta2></Planta2> 
    }
  }
  return <div className='bg-green-500'>
    
  <ContenidoCentradoAzul>
  <div>
    <h2>{`Status: ${connectionStatus}`}</h2>
    {traerPlanta()}
    <p>Humedad {message?.message}%</p>
    <p>{nivelHumedad()}</p>
    <button type='button' onClick={handlePublish}>Reiniciar</button>
    </div>
  </ContenidoCentradoAzul>
  
  
    
    
  </div> 
}

export default MqttExample;