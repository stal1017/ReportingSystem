'use strict';

angular.module('myApp.weitere_Report_View', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/weitereReports', {
            templateUrl: 'Angular/Views/weitere_Report_View.html',
            controller: 'weitere_Reports_Ctrl'
        });
    }])

    .controller('weitere_Reports_Ctrl', [function() {

        console.log("weitere_Reports_Ctrl geladen");

    }]);
