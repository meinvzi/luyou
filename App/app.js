var app=angular.module('app',['ui.router']);
app.config(["$stateProvider","$urlRouterProvider", function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('xiang',{
            url:'/xiang/:id',
            templateUrl:'./App/View/temp/xiang.html',
            controller:'xiangcontroller'
        })
        .state('user',{
            url:'/user',
            templateUrl:'./App/View/user.html',
            controller:'indexcontroller'
        })
       $urlRouterProvider.when('','user')
}]);
