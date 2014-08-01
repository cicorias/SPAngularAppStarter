'use strict';

// declare app
angular.module('myApp', [
    // Angular Core Modules
    'ngRoute',
    'ngAnimate',

    // Custom Modules
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    // Configure routing
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
