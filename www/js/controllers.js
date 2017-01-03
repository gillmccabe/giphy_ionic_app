angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $q) {

  var apiKey = "&api_key=dc6zaTOxFJmzC";
  var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat" + apiKey; 

  function getGifs (){
    var deferred = $q.defer();

    $http.get(url)
      .then(
        function(response){
          console.log(response);
        }, 
        function(error){
          console.log(error);
        });
    return deferred.promise; 
  }
  getGifs();

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
