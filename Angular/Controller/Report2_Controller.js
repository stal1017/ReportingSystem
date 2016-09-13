'use strict';

angular.module('myApp.Report2_View', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/Report2', {
            templateUrl: 'Angular/Views/Report2_View.html',
            controller: 'Report2_Ctrl'
        });
    }])

    .controller('Report2_Ctrl', [function() {

        console.log("Report2_Ctrl geladen");
    }]);
