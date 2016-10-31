angular.module('starter.controllers',[])

.controller('TarefaCtrl', function($scope){
	$scope.tarefas = [];

	$scope.nova = {nome: ''};


	$scope.adicionar = function(){

		if($scope.nova.nome){

		$scope.tarefas.push({
			nome: $scope.nova.nome,
			feito: false
		});
		$scope.nova.nome = '';
	}
  };

  $scope.limpar = function () {
  	var incompletas = [];

  	for (var i = 0; i < $scope.tarefas.length; i++) {
  		if(!$scope.tarefas[i].feito){
  			incompletas.push($scope.tarefas[i]);
  		}
  	}
$scope.tarefas = incompletas;
  }

})

