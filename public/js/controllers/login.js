'use strict';

angular.module('socialLogin')
.controller('loginCtrl', function($scope, $auth, $state) {

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log(res);
      $state.go('profile');
    })
    .catch(function(err){
      console.error(err);
    });
  };

});
