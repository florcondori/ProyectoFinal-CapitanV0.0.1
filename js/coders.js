var estudiantes =[{Nombre:"Ana", Apellido:"Carrasco", Promocion:"1°Promocion", Estado:"Trabajando"},
				{Nombre:"Flor", Apellido:"Pimentel", Promocion:"1°Promocion", Estado:"Trabajando"},
				{Nombre:"Claudia", Apellido:"Huamani", Promocion:"3°Promocion", Estado:"Trabajando"},
				{Nombre:"Patricia", Apellido:"Timoteo", Promocion:"3°Promocion", Estado:"Trabajando"},
				{Nombre:"Monica", Apellido:"Montenegro", Promocion:"1°Promocion", Estado:"Trabajando"},
				{Nombre:"Zulema", Apellido:"Gutierrez", Promocion:"2°Promocion", Estado:"Trabajando"},
				{Nombre:"Maricarmen", Apellido:"Flamenco", Promocion:"2°Promocion", Estado:"Trabajando"},
				{Nombre:"Julia", Apellido:"Duran", Promocion:"3°Promocion", Estado:"Trabajando"}];

var contenido = document.getElementById('contenido_coder');
var mensaje ="";

window.addEventListener('load',function(){
	estudiantes.forEach(function(elem){
		mensaje+="<div class= div_coder>";
		for(var prop in elem){
			mensaje+="<strong>"+prop+": </strong>"+elem[prop]+"<br>";
		}
		mensaje+="</div>";
	});

	contenido.innerHTML = mensaje;
});

var botonVolver = document.getElementById('volver');
	botonVolver.addEventListener('click', function(){
		window.location = "index.html";
	});
		
  