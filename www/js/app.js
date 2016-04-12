// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('tenday', ['ionic', 'tenday.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
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
    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'app-ctl'
    }).state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html'
            }
        }
    }).state('app.browse', {
        url: '/browse',
        views: {
            'menuContent': {
                templateUrl: 'templates/browse.html'
            }
        }
    }).state('app.list', {
        url: '/playlists/:type',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlists.html',
                controller: 'list-ctl'
            }
        }
    }).state('app.wy-news' ,{
        url: '/wy/list',
        views: {
            'menuContent': {
                templateUrl: 'templates/wy-list.html',
                controller: 'wy-news'
            }
        }
    }).state('app.wy-news-detail' ,{
        url: '/wy/detail?:url',
        views: {
            'menuContent': {
                templateUrl: 'templates/wy-detail.html',
                controller: 'wy-detail'
            }
        }
    }).state('app.detail', {
        url: '/detail/:title?:url',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'detail-ctl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists/keji');
});
