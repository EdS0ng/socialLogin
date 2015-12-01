'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'partials/home.html', controller: 'homeCtrl'})
    .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl'})
    .state('members', {url: '/members', templateUrl:'partials/members.html', controller:'memberCtrl'})
    .state('profile', { url: '/profile', templateUrl: 'partials/profile.html', controller: 'profileCtrl'})

    $authProvider.github({
      clientId: '9c3382f06c8ff2a68895'
    });
    $authProvider.google({
      clientId: '520065795700-02mfa9u9f1hdp7ep3ptrd10p82d6ssf3.apps.googleusercontent.com'
    });
    $authProvider.facebook({
      clientId: '776038785831176'
    });

    $authProvider.twitter();

    // $authProvider.live({
    //   clientId: '000000004C173030',
    //   authorizationEndpoint: 'https://login.live.com/oauth20_desktop.srf',
    //   redirectUri: 'http://mylocalwebsite.net:3000'

    // });
});
