var app=angular.module('UploadTask',[]); 

app.controller('MainCtrl',[ 
'$scope', 
function($scope, $window){

	//adds new post
	$scope.posts = [
		$scope.priority =['High', 'Med', 'Low'];
	
		];
	$scope.addPost = function(){ 
		$scope.posts.push({name: $scope.name, type: $scope.type, level: $scope.level, priority: $scope.priority});
		$scope.name = '';
		$scope.type = '';
		$scope.level = '';
		$scope.priority = '';
	
	
	} 
	
	//Remove row function
	
	$scope.removeRow = function(name){				
		var index = -1;		
		var comArr = eval( $scope.posts );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Entry Deleted" );
		}
		$scope.posts.splice( index, 1 );		
	};
}]);

























