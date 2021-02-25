
const target = (depart , target) => {

  let currentFloor = depart
  let targetFloor = target
  
  let controle = targetFloor === currentFloor ? 'vous y etes deja' : targetFloor < -2 ? 'on ne va pas plus bas' :  targetFloor > 7 ? 'on ne va pas plus haut' : 'ok'  

  let msg=''

  switch(controle){

    case  'vous y etes deja' :
      //currentFloor = targetFloor
      msg = 'vous y etes deja'
      break

    case  'on ne va pas plus bas' :
      //currentFloor = -2
      msg = 'on ne va pas plus bas'
      break

    case  'on ne va pas plus haut' :
      //currentFloor = 7
      msg = 'on ne va pas plus haut'
      break

    case  'ok' :
      //currentFloor = targetFloor
      msg='vous allez au '+targetFloor+' etage'
      break
    
    } 

    return  console.log(`vous etes au ${currentFloor}  ${msg}`)
  
  }
  target(6,9)