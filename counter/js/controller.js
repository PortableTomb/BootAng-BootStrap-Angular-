// angular.module('app', [])
//       .controller('controller', function($scope) {
//           $scope.AddNumbers = function () {
//               var a = Number($scope.a || 0);
//               var b = Number($scope.b || 0);
//               $scope.sum = a+b;
//           };
//       });

angular.module('CounterApp', [])
    .controller('CounterController', function($scope, $timeout) {
        var timer;
        $scope.counter = 0;
        $scope.stopCounter = function(){
        	$timeout.cancel(timer);
        	timer = null;
        };

        $scope.startCounter = function() {
        	if (timer === null){
        	        	updateCounter();
        	        }
        };

        var updateCounter = function() {
            $scope.counter++;
            timer = $timeout(updateCounter, 1000);
        };
        updateCounter();
    });
