var app = angular.module('beersapp',['ngRoute','beerServices','beerControllers']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/beers.html',
		controller: 'beerlistController'
	});
	
	$routeProvider.when('/beer', {
		templateUrl: 'views/beer.html',
		controller: 'beerController'
	});
}]) 


.config(['beersProvider', function(beersProvider){
	beersProvider.setApikey('2109c52d5c6ae137f7947e7f8f132d5c');
}]);








