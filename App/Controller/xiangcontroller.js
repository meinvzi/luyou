app.controller('xiangcontroller', ['$scope', 'indexserver','$stateParams',function($scope, indexserver,$stateParams) {
    $scope.id=$stateParams.id;
    indexserver.getData()
    .then(function (result) {
            result.forEach(function(item,index){
                if($scope.id == index){
                    $scope.user = item;
                }
            })
        })
}])