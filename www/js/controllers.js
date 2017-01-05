angular.module('starter.controllers', [])

.controller('SearchCtrl', function($scope, $http, $q, _apiKey) {
  console.log(_apiKey);
  var searchUrl = "http://api.giphy.com/v1/gifs/search?q="; 

  $scope.search = {
    term: '', 
    results: null
  };

  $scope.searchGifs = function(){
    var deferred = $q.defer();
    var url = searchUrl + $scope.search.term + _apiKey;

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


.controller('DiscoverCtrl', function($scope, $http, $q) {

  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


})


.controller('FavouritesCtrl', function($scope) {

});
