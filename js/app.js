var app = angular.module('beersapp',[]);

app.controller('beerlistController', function($scope){
  $scope.beers = [{name: 'taquina', avb: 6},{name: 'pacena', avb: 5},{name: 'huari', avb: 8}];
});