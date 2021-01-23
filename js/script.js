


	//NUMEROS 
	const uno = document.getElementById('uno');
	const dos = document.getElementById('dos');
	const tres = document.getElementById('tres');
	const cuatro = document.getElementById('cuatro');
	const cinco = document.getElementById('cinco');
	const seis = document.getElementById('seis');
	const siete = document.getElementById('siete');
	const ocho = document.getElementById('ocho');
	const nueve = document.getElementById('nueve');
	const cero = document.getElementById('cero');

	// OPERACIONES 
	let visor = document.getElementById('visor');
	const suma = document.getElementById('suma');
	const resta = document.getElementById('resta');
	const multiplicacion = document.getElementById('multiplicacion');
	const division = document.getElementById('division');
	const igual = document.getElementById('igual');
	let resultado = document.getElementById('resultado');
	let operacion = " ";

// PARA QUE FUNCIONE LAS OPERACIONES


suma.addEventListener ("click", function(){
	resultado.textContent = " ";
	operacion += "+";
});


resta.addEventListener ("click", function(){
	resultado.textContent = " ";
	operacion += "-";
})


multiplicacion.addEventListener ("click", function(){
	resultado.textContent = " ";
	operacion += "*";
})


division.addEventListener ("click", function(){
	resultado.textContent = " ";
	operacion += "/";
})


igual.addEventListener ("click", function(){
	resultado.textContent = eval(operacion);
})




// 	//EL LLAMADO PARA QUE AL DARLE CLICK FUNCIONEN LOS BOTONES  DE LOS NUMEROS

uno.addEventListener ("click", function(){
	resultado.textContent += uno.textContent;
	operacion += uno.textContent;
})

dos.addEventListener ("click", function(){
  resultado.textContent += dos.textContent;
  operacion += dos.textContent;
})

tres.addEventListener ("click", function(){
resultado.textContent += tres.textContent;
operacion += tres.textContent;
})

cuatro.addEventListener ("click", function(){
resultado.textContent += cuatro.textContent;
operacion += cuatro.textContent;
})


cinco.addEventListener ("click", function(){
resultado.textContent += cinco.textContent;
operacion += cinco.textContent;
})


seis.addEventListener ("click", function(){
resultado.textContent += seis.textContent;
operacion += seis.textContent;
})

siete.addEventListener ("click", function(){
resultado.textContent += siete.textContent;
operacion += siete.textContent;
})


ocho.addEventListener ("click", function(){
resultado.textContent += ocho.textContent;
operacion += ocho.textContent;
})


nueve.addEventListener ("click", function(){
resultado.textContent += nueve.textContent;
operacion += nueve.textContent;
})

cero.addEventListener ("click", function(){
resultado.textContent += cero.textContent;
operacion += cero.textContent;
})


reset.addEventListener ("click", function(){
resultado.textContent ="";
operacion = "";
})









