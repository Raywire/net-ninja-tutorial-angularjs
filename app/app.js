const myNinjaApp = angular.module('myNinjaApp', [])

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
  $scope.removeNinja = function(ninja) {
    const removedNinja = $scope.ninjas.indexOf(ninja)
    $scope.ninjas.splice(removedNinja, 1)
  }
  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50,
      available: true
    },
    {
      name: "Crystal",
      belt: "yellow",
      rate: 30,
      available: true
    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10,
      available: true
    },
    {
      name: "Ryan",
      belt: "black",
      rate: 1000,
      available: false
    },
    {
      name: "Mini",
      belt: "blue",
      rate: 500,
      available: false
    }
  ]
}])