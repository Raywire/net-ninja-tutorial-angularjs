const myNinjaApp = angular.module('myNinjaApp', [])

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
  $scope.removeNinja = function(ninja) {
    const removedNinja = $scope.ninjas.indexOf(ninja)
    $scope.ninjas.splice(removedNinja, 1)
  }
  $scope.addNinja = function() {
    $scope.ninjas.push({ 
      name: $scope.newNinja.name,
      belt: $scope.newNinja.belt,
      rate: parseInt($scope.newNinja.rate),
      available: true
    })

    $scope.newNinja.name = ''
    $scope.newNinja.belt = ''
    $scope.newNinja.rate = ''
  }
  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50,
      available: true,
      thumb: 'http://i.pravatar.cc/100?id=skater'
    },
    {
      name: "Crystal",
      belt: "yellow",
      rate: 30,
      available: true,
      thumb: 'http://i.pravatar.cc/100?id=skater'
    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10,
      available: true,
      thumb: 'http://i.pravatar.cc/100?id=skater'
    },
    {
      name: "Ryan",
      belt: "black",
      rate: 1000,
      available: false,
      thumb: 'http://i.pravatar.cc/100?id=skater'
    },
    {
      name: "Mini",
      belt: "blue",
      rate: 500,
      available: false,
      thumb: 'http://i.pravatar.cc/100?id=skater'
    }
  ]
}])