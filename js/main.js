window.addEventListener('load',function(){
	
	if(sessionStorage.getItem("coder")){
		document.getElementById('nombre').innerHTML = sessionStorage.getItem("coder");
	}else{
		sessionStorage.setItem("coder",prompt("Cual es tu nombre Coder:"));
		document.getElementById('nombre').innerHTML = sessionStorage.getItem("coder");
	}

	var btnSprint1 = document.getElementById('sprint1');
	var btnSprint2 = document.getElementById('sprint2');
	var btnSprint3 = document.getElementById('sprint3');

	var divSprint3 = document.getElementById('contenido_sprint3');
	var divSprint2 = document.getElementById('contenido_sprint2');
	var divSprint1 = document.getElementById('contenido_sprint1');

	sprint3.onclick = function(){
		mostrar(divSprint3);
		ocultar(divSprint2);
		ocultar(divSprint1);
	};

	sprint2.onclick = function(){
		mostrar(divSprint2);
		ocultar(divSprint3);
		ocultar(divSprint1);
	}

	sprint1.onclick = function(){
		mostrar(divSprint1);
		ocultar(divSprint2);
		ocultar(divSprint3);
	}
});

function mostrar(elemento){
	elemento.style.display = "block";
}

function ocultar(elemento){
	elemento.style.display = "none";
}