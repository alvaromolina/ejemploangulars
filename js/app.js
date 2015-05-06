var app = angular.module('beersapp',['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/beers.html',
		controller: 'beerlistController'
	});

	$routeProvider.when('/beer', {
		templateUrl: 'views/beer.html',
		controller: 'beerController'
	});
}]);

app.controller('beerlistController', function($scope){
  $scope.beers = [{name: 'taquina', avb: 6},{name: 'pacena', avb: 5},{name: 'huari', avb: 8}];
});

app.controller('beerController', function($scope){
  $scope.beer = {name: 'taquina', avb: 6}
});


