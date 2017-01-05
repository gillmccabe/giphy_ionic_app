angular.module('starter.controllers', [])

.controller('SearchCtrl', function($scope, $http, $q, _apiKey) {
  var searchUrl = "http://api.giphy.com/v1/gifs/search?q="; 

  $scope.search = {
    term: '', 
    results: null
  };

  $scope.searchGifs = function(){
    var deferred = $q.defer();
    var url = searchUrl + $scope.search.term + '&' + _apiKey;

    $http.get(url)
      .then(
        function(response){
          console.log(response);
          $scope.search.results = response.data.data;
          deferred.resolve(response.data);
        }, 
        function(error){
          console.log(error);
        });
    return deferred.promise; 
  }

  $scope.favouriteGif = function (slug){
    console.log(slug);    
  }
})


.controller('DiscoverCtrl', function($scope, $http, $q, _apiKey) {
  var url = 'http://api.giphy.com/v1/gifs/trending?' + _apiKey;

  function discoverGifs(){
    var deferred = $q.defer();

    $http.get(url)
      .then(
        function(response){
          var gifs = response.data.data;
          $scope.gifs = gifs;
          console.log($scope.gifs);
          deferred.resolve(gifs);
        }, 
        function(error){
          console.log(error);
        });
    return deferred.promise; 
  }

  discoverGifs();
  $scope.favouriteGif = function (slug){
    console.log(slug); 
  }
})


.controller('FavouritesCtrl', function($scope) {

});
