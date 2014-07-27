'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

      yam.connect.embedFeed({
          container: "#embedded-feed",
          network: "microsoft.com",
          feedType: "group",
          feedId: "all"
      });

  }])
  .controller('MyCtrl2', ['$scope', 'datacontext', function ($scope, datacontext) {

  }]);
