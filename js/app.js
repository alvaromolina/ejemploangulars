var app = angular.module('beersapp',['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/beers.html',
		controller: 'beerlistController'
	});
}]);


app.controller('beerlistController', function($scope){
  $scope.beers = [{name: 'taquina', avb: 6},{name: 'pacena', avb: 5},{name: 'huari', avb: 8}];
});

