var quiz1 = {1:"a", 2:"a", 3:"c"};
var quiz2 = {1:"b", 2:"a", 3:"b"};

var enviar1 = document.getElementById('boton1_enviar');
var enviar2 = document.getElementById('boton2_enviar');

var contCorrectas;

enviar1.addEventListener('click',function(){		
	var respuestasQuiz1 = document.getElementsByClassName('respuesta_quiz1');
	var sectionPreguntasQuiz1 = document.getElementById('preguntas_quiz1');
	
	if(validarRespuestas(respuestasQuiz1)){		
		contCorrectas = contarCorrectas(respuestasQuiz1,quiz1);
		sectionPreguntasQuiz1.innerHTML = "Tiene "+ contCorrectas+" respuesta(s) correcta(s)";
	}else{
		alert("Responder todas las preguntas");
	}


});

enviar2.addEventListener('click',function(){		
	var respuestasQuiz2 = document.getElementsByClassName('respuesta_quiz2');
	var sectionPreguntasQuiz2 = document.getElementById('preguntas_quiz2');
	
	if(validarRespuestas(respuestasQuiz2)){
		contCorrectas = contarCorrectas(respuestasQuiz2,quiz2);
		sectionPreguntasQuiz2.innerHTML = "Tiene "+ contCorrectas+" respuesta(s) correcta(s)";
	}else{
		alert("Responder todas las preguntas");
	}


});

function validarRespuestas(arrayUsuario){
	var cont_resp = 0;
	for(var i=0; i<arrayUsuario.length; i++){
		if(arrayUsuario[i].checked){
			cont_resp++;
		}								
	}

	return cont_resp==3;
}

function contarCorrectas(array,respuestasQuiz){
	var correctas = 0;
	var respuestas = [];

	for(var i=0; i<array.length; i++){
		if(array[i].checked){
			respuestas.push(array[i]);
		}
	}
	/*array.forEach(function(elem,i){
		if(elem.checked){
			respuestas.push(elem);
		}
	});*/

	respuestas.forEach(function(e,i){
						if(e.value == respuestasQuiz[i+1]){
							correctas++;
						}
	});

	return correctas;
}