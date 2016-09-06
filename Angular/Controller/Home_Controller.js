'use strict';

angular.module('myApp.Home_View', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/Home_View', {
            templateUrl: 'Angular/Views/Home_View.html',
            controller: 'Home_Ctrl'
        });
    }])

    .controller('Home_Ctrl', [function() {

        console.log("Home_Ctrl geladen");
    }]);