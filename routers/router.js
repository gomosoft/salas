var router = function(app){
	
	 app.config(function($routeProvider){

	 	  var $router = $routeProvider;

	 	  var auth = function($http){ 	 	  	
                      
                      $http.get("aplicacion/controladores/controlador_validar_sesion.php")
                      .success(function(rs){
                      	   if(rs.estado != 1)
                      	   	{
                      	   		window.location = "#/";
                      	   		return false;
                      	   	}

                      	   	return true;
                      });        

	 	  		  }


	 	  	var noLogued = function($http){ 

	 	  			  console.log($http);
                      
                      $http.get("aplicacion/controladores/controlador_validar_sesion.php")
                      .success(function(rs){
                      	   if(rs.estado != 0)
                      	   	{
                      	   		window.location = "#/sala";
                      	   		return false;
                      	   	}

                      	   	return true;
                      });        

	 	  		  }


	 	  $router
	 	  .when("/registro", { templateUrl : "vistas/registro.html" })	 	  
	 	  .when("/sala", { templateUrl : "vistas/sala.html", resolve : {auth : auth}})	 	  	 	  
	 	  .when("/reportes", { templateUrl : "vistas/reportes.html", resolve : {auth : auth}})	 	  
	 	  .when("/", { templateUrl : "vistas/login.html" , controller : "loginCtrl", resolve :  { noLogued : noLogued}});	 	  

	 });


}