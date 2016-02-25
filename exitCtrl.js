angular
  .module('app')
  .controller('exitCtrl', ['$scope','$state', function($scope,$state) {
    $scope.title = "Continue again";
   $scope.run=function(){
   	alert('Thanks');
   }


   $scope.go=function()
   {
   	$state.go('contact')
   }
   }]);