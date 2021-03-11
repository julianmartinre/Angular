angular.module("HttpModule", [])
.controller("HttpController", function ($scope, $http) {
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