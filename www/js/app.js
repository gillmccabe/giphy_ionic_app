// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'starter.services'])

.run(function($ionicPlatform) {
  console.log('app running');
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      }
    }
  })

  .state('tab.discover', {
      url: '/discover',
      views: {
        'tab-discover': {
          templateUrl: 'templates/tab-discover.html',
          controller: 'DiscoverController',
          controllerAs: 'vm'
        }
      }
    })

  .state('tab.favourites', {
    url: '/favourites',
    views: {
      'tab-favourites': {
        templateUrl: 'templates/tab-favourites.html',
        controller: 'FavouritesController',
        controllerAs: 'vm'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/discover');
});
