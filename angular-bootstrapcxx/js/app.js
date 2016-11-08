var backGround = angular.module('Background', ['ui.router','app-ctrl']);
//var backGround = angular.module('Background', ['ui.router']);
//默认路由
backGround.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('goodslist');
});
//这里可以写路由
backGround.config(['$stateProvider',function($stateProvider){
  $stateProvider
  .state('goodsdetail',{
    url:'/goodsdetail/:id',
    templateUrl:'/angular-bootstrapcxx/partital/goodsdetail.html',
    controller:"goodsdetailController"
  })
  .state('goodslist',{
    url:'/goodslist',
    templateUrl:'/angular-bootstrapcxx/partital/goodslist.html',
    controller:"goodslistController"
  })
  .state('dingdanlist',{
    url:'/dingdanlist',
    templateUrl:'/angular-bootstrapcxx/partital/dingdanlist.html',
    controller:"dingdanlistController"
  })


}]);

// backGround.controller('goodslistController',['$scope','$http',function($scope, $http){
//  $http({
//    url:'http://10.9.163.129/thinkphp3.2.3/index.php/Home/Index/readlist',
//    method:'get'
//  })
//  .then(function(res){
//    $scope.listdata = res
//    console.log(res);
//  })
// }]);
