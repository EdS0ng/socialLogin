'use strict';

angular.module('socialLogin')
.controller('memberCtrl', function($scope, $auth, $state, memberService) {
  if(!$auth.isAuthenticated()){
    return $state.go('home');
  }

  memberService.grabMembers(function (members){
    $scope.users = members;
  });

  $scope.show = function (idx){
    $scope.clicked = idx;
  }
  //$scope.postMessage = memberService.sendMessage()
})
.service('memberService', function ($http){
  var members = [];

  this.grabMembers = function (cb){
    $http.get('/users/all').then(function(res) {
      members = res.data;
      cb(members);
    }, function(err) {
      console.error(err);
    });
  }

  this.sendMessage = function (message, idx){
    var user = localStorage.satellizer_token;
    $http.post('users/message', {message:message, currentUser:members[idx], toUser: user}).then(function (res){
      console.log(res.data);
    })
  }

  this.getMember = function (idx){
    return members[idx];
  }
})