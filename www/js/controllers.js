angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $q) {

  var apiKey = "&api_key=dc6zaTOxFJmzC";
  var searchUrl = "http://api.giphy.com/v1/gifs/search?q="; 

  $scope.search = {
    term: '', 
    results: null
  };

  $scope.searchGifs = function(){
    var deferred = $q.defer();
    var url = searchUrl + $scope.search.term + apiKey;

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

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
