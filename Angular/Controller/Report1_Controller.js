'use strict';

angular.module('myApp.Report1_View', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/Report1', {
            templateUrl: 'Angular/Views/Report1_View.html',
            controller: 'Report1_Ctrl'
        });
    }])

    .controller('Report1_Ctrl', [function() {

        console.log("Report1_Ctrl geladen");
    }]);