angular.module('ClimberTask', []) 
	.controller('ClimberTaskController', function($scope){ 
		$scope.list =[ 
			
			]; 
			
		$scope.addTask = function(){ 
			$scope.list.push({name:$scope.taskname});
			$scope.taskname = ' '; 
		
		};
			
	}); 