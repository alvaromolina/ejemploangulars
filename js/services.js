
var app = angular.module('beerServices',['ngRoute']);


app.provider('beers', function beersProvider() {
  var apiKey = '2109c52d5c6ae137f7947e7f8f132d5c';
  this.setApikey = function(value) {
    apiKey = value;
  };
  this.$get = function beersFactory($http) {
  	var factory = {};
  	factory.getBeers = function(){
		return $http.jsonp('https://jsonp.afeld.me/?callback=JSON_CALLBACK&url=http%3A%2F%2Fapi.brewerydb.com%2Fv2%2Fbeers%3Fkey%3D'+apiKey+'%26format%3Djson%26styleId%3D2');
	};
	return factory;
  };
});
