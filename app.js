(function functionName() {
'use strict';

angular.module('myFirstApp',[])
.controller('myFirstController', function ($scope) {
  $scope.name = "priyanka";
  $scope.sayHello = function () {
    return "hello there..."
  };
}) ;

})();
