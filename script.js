var app=angular.module('myApp',[]);


app.controller('MyController',['$scope',function($scope){
  $scope.meals=['11111','22222','3333'];
  $scope.currentPage=1;
  $scope.pageSize=10;
  $scope.words=[{word:'123'}];
  $scope.pageChangeHandler=function(num){
    console.log('meals page changed to '+num);
  };
  console.log($scope.meals);
}]);
