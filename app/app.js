const myNinjaApp = angular.module('myNinjaApp', [])

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50
    },
    {
      name: "Crystal",
      belt: "yellow",
      rate: 30
    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10
    },
    {
      name: "Ryan",
      belt: "black",
      rate: 1000
    }
  ]
}])