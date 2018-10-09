(function functionName() {
'use strict';

angular.module('NameCalculator',[])
.controller('NameCalculatorController', function ($scope) {
  $scope.name1 ="";
  $scope.totalValue = 0 ;

  $scope.displayNumeric = function () {
    var totalNameValue = calculateTotalNameValue($scope.name1);
    $scope.totalValue = totalNameValue;
  };

   function calculateTotalNameValue(str){
     var totalStringValue =0;
     for (var i=0;i<str.length; i++){
       totalStringValue += str.charCodeAt(i);
     }
      return totalStringValue;
   }



}) ;


})();
