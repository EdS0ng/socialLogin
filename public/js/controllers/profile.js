'use strict';

angular.module('socialLogin')
.controller('profileCtrl', function($scope, $auth, $state, $http) {
  if(!$auth.isAuthenticated()){
    return $state.go('home');
  }

  $http.get('/users/me')
  .then(function(res) {
    $scope.user = res.data;
  }, function(err) {
    console.error(err);
  });
});
