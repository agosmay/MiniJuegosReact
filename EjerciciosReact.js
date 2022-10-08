//////////////////////////////////////////////////// Contador Basico /////////////////////////////////////////////////////////////////

import React , { useState } from 'react';

export const Contador = () => {
	const [nroClicks, setNroClicks] = useState(0)
	
	const sumar = () => {
		setNroClicks(nroClicks + 1)
	}
	const restar = () => {
		setNroClicks(nroClicks - 1)
	}
	const reiniciar = () => {
		setNroClicks(0)
	}
	
	return (
		<>
			<div> {nroClicks} </div>
			<button onClick={sumar}> + </button>
			<button onClick={restar}> - </button>
			<button onClick={reiniciar}> Reiniciar </button>
		</>
	);
}


//////////////////////////////////////////////////////// Datos Aleatorios //////////////////////////////////////////////////////

import React , { useState } from 'react';

export const Datos = () => {
	
	const [contador, setContador]=useState(0)
	
	const [datos, setDatos] = useState("Haz click")
	
	const data = ["id","nombre","edad"]
	
	const mostrarDatos = ()=> {
		handleChange()
		if (contador===3) {
			console.log(contador)
			setContador(0)
			setDatos("vuelve a girar")
		}
		if(contador===0) {
			console.log(contador)
			setDatos(data[0])
		} else if(contador===1) {
			console.log(contador)
			setDatos(data[1])
		}else if(contador===2){
			console.log(contador)
			setDatos(data[2])
		}
	}
	
	const handleChange = () => {
		setContador(contador + 1)
	}
	
	return (
		<>
			<div>{datos}</div>
			<div>{contador}</div>
			<button onClick={mostrarDatos}>Mostrar Datos</button>
		</>
	);
}




////////////////////////////////////////////////////// PIEDRA PAPEL TIJERA/////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';

export const PiedraPapelTijera = () => {
	const [opcionUSER, setOpcionUSER] = useState("Su opcion es")
	const [opcionPC, setOpcionPC] = useState("Opcion de la pc")
	const [resultado, setResultado] = useState("")
	
	const pc = ()=> {
		const random = Math.floor(Math.random()*3)
		if(random===0) {
			setOpcionPC("Piedra")
		}else if (random===1) {
			setOpcionPC("Papel")
		}else if (random===2) {
			setOpcionPC("Tijera")
		}
	}
	
	
const result = () => {
    if (opcionUSER === opcionPC) {
      setResultado("It's a tie!!!");
    }
      if (
        (opcionPC === "Piedra" && opcionUSER === "Tijera") ||
        (opcionPC === "Papel" && opcionUSER === "Piedra") ||
        (opcionPC === "Tijera" && opcionUSER === "Papel")
      ) {
       setResultado("PC won");
      }
	  
	  if(
        (opcionUSER === "Piedra" && opcionPC === "Tijera") ||
        (opcionUSER === "Papel" && opcionPC === "Piedra") ||
        (opcionUSER === "Tijera" && opcionPC === "Papel")
      ) {
      setResultado("USER won");
    }
  }; 
 
 
useEffect(()=> {
	result()
	
	
},[opcionPC, opcionUSER])
  


	return (
		<>
			<div>{`Opcion user : ${opcionUSER}`}</div>
			<div>{`Opcion pc : ${opcionPC}`}</div>
			<div>{resultado}</div>
		
			
			<button onClick={()=> {setOpcionUSER("Piedra"); pc()}}>Piedra</button>
			<button onClick={()=> {setOpcionUSER("Papel"); pc()}}>Papel</button>
			<button onClick={()=>{ setOpcionUSER("Tijera"); pc()}}>Tijera</button>
	
			
	
		</>
	);
}

////////////////////////////  NUMERO MAYOR ///////////////////////////////////////////////////////



import React, { useState, useEffect } from 'react';

export const NumeroMayor = () => {
	
	const [opcionUSER, setOpcionUSER] = useState("")
	const [opcionPC, setOpcionPC] = useState("")
	const [resultado, setResultado] = useState("")
	
	const jugarUsuario	= () => {
		setOpcionUSER(parseInt(prompt('ingrese un numero')))
	}
	
	const jugarPC	= () => {
		setOpcionPC(Math.floor(Math.random()*5))
	}
	
	const jugar = () => {
		
		jugarUsuario();
		jugarPC();
	}
	
	
	
	const result = () => {
		if(opcionUSER=== opcionPC) {
			setResultado("Empate")
		}
		
		if(opcionUSER>opcionPC){
			setResultado("USUARIO GANADOR")
		}else if(opcionPC>opcionUSER){
			setResultado("PC GANADORA")
		}
		
	}
	
	
	useEffect(()=> {
	
			result()
	
		
	}, [opcionUSER, opcionPC])
	
		return (
		<>
			<div>{`El usuario eligio ${opcionUSER}`}</div>
			<div>{`La pc eligio ${opcionPC}`}</div>
			<div>{`El resultado es ${resultado}`}</div>
			<button onClick={jugar}>Jugar!!!</button>
		</>
		
		);
}