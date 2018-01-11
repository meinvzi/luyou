app.controller('indexcontroller',['$scope', 'indexserver','$stateParams','$location',function($scope, indexserver,$stateParams,$location){
    indexserver.getData().then(function(result) {
            $scope.user=result;
    });
    $scope.linkTo = function (idx) {
        var str = "/xiang/" + idx;
        $location.path(str);
    }
}]);