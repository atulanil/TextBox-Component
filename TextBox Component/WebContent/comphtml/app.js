var myApp = angular.module('InputBx', []);

myApp.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});
myApp.directive('accountNumber', function(){
     return {
        restrict: 'E',
        require: 'ngModel',
        templateUrl: 'inputContainer.html',
        replace: true,
        scope: {
            text: '=ngModel',
            title: '=title',
            placeholder : '=placeholder'
        },            
    }
});