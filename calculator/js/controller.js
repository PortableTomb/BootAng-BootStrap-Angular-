// angular.module('app', [])
//       .controller('controller', function($scope) {
//           $scope.AddNumbers = function () {
//               var a = Number($scope.a || 0);
//               var b = Number($scope.b || 0);
//               $scope.sum = a+b;
//           };
//       });

angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
            if ($scope.operator == '+') {
                return $scope.a + $scope.b;
            }
            if ($scope.operator == '-') {
                return $scope.a - $scope.b;
            }
            if ($scope.operator == '*') {
                return $scope.a * $scope.b;
            }
            if ($scope.operator == '/') {
                return $scope.a / $scope.b;
            }
        };
    });