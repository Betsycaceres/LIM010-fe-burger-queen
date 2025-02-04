import React from 'react';

const TiempoDePreparacion = ({ p }) => {

	let fin = p.duración.toDate().getTime(); 
	let inicio = p.hora.toDate().getTime();
	const getTime = () => {
		let miliseg = fin - inicio;
		let hora = parseInt(((miliseg / (1000 * 60 * 60)) % 24));
		let minutos = parseInt(((miliseg / (1000 * 60)) % 60));
		let segundos = parseInt((miliseg / 1000) % 60);
		let tiempo =(hora + ':' + minutos + ':' + segundos);
		console.log(tiempo);
		return tiempo;
	}
	return (
		<div className="row space-around principal">
			<p>Tiempo de preparación:</p>
			<p>{getTime()}</p>
		</div>
		

	)
}
export default TiempoDePreparacion;