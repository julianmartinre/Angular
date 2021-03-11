var app = angular.module("AngularModule", ["LocalStorageModule"])

app.controller("HttpController", function ($scope, $http) {
    $scope.nombre = "Julian";
    $scope.posts = [];
    $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(function (response) {
        console.log(response);
        $scope.posts = response.data;
    }, function (error) {

    })
});

app.controller("TodoController", function ($scope, localStorageService) {
    $scope.todo = [];
    $scope.AddActv = function () {
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};
    }
});