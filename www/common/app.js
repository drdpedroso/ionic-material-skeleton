// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic-material'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'common/views/menu.html'
        })
        // Login
        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/views/login.html'
        })
        
        // Trips
        .state('app.trips', {
            url: '/trips',
            views: {
                'menuContent' :{
                    templateUrl: 'modules/trips/views/list.html'
                }
            }
        })
        .state('app.trip', {
            url: '/trip/detail',
            views: {
                'menuContent' :{
                    templateUrl: 'modules/trips/views/details.html'
                }
            },
            params: {
              trip : null
            }
        })
        .state('app.trip_map', {
            url: '/trip/map',
            views: {
                'menuContent' :{
                    templateUrl: 'modules/trips/views/map.html'
                }
            },
            params: {
              trip : null
            }
        })


    $urlRouterProvider.otherwise('app/trips');
});

