var app = angular.module('beerControllers',['ngRoute']);


app.controller('beerlistController', function($scope, $http, beers){
  //$scope.beers = [{name: 'taquina', avb: 6},{name: 'pacena', avb: 5},{name: 'huari', avb: 8}];
  beers.getBeers().success(function(data){
	$scope.beers = data.data;
  });

});

app.controller('beerController', function($scope){
  $scope.beer = {name: 'taquina', avb: 6}
});