var app = angular.module('app');

app.controller (
    //name of controller
    'AboutController',

    //dependencies for controller to work
    [
        '$scope',
        //controller callbck function

        function ($scope) {
            console.log ('About controller has been loaded.');
            $scope.title = 'About Rishi';
            $scope.list =
                [
                'Rishi',
                'Richie',
                'RishiRich'];
            $scope.testMethod = function () {
                console.log('this method succeedded');
            };

        };
    ];
);
