appCtrl.controller('dingdanlistController', ['$scope', '$http', function($scope, $http) {
    $http.get('/angular-bootstrapcxx/mock/book-list.json').success(function(data) {
        console.log(data);
        $scope.dingdan = data;
        // console.log($scope.dingdan[0].listnumber);
    }).error(function(error) {
        console.log('error');
    }),
    $scope.getwhich=function(i){
      $scope.delnum=i;
    },
    $scope.dellist=function(s){

      $scope.dingdan.splice(s,1);
      // console.log(s);
    },
    $scope.editwhich=function(i){
      // console.log(i);
      $scope.editindex=i;
      $scope.product=$scope.dingdan[i].product;
      $scope.price=$scope.dingdan[i].price;
      $scope.info=$scope.dingdan[i].info;
      $scope.selected=$scope.dingdan[i].selected;
      $scope.addmessage=$scope.dingdan[i].addmessage;

    },
    $scope.edit=function(){
      // console.log($scope.addmessage);
      $scope.dingdan[$scope.editindex].price=$scope.price;
      $scope.dingdan[$scope.editindex].selected=$scope.selected;
      $scope.dingdan[$scope.editindex].addmessage=$scope.addmessage;
    }


}]);
//使用过滤器解析下单类型
appCtrl.filter('type', function() {
    return function(g) {
        switch (g) {
            case true:
                return '手机端';
            case false:
                return '电脑端';
            default:
                return '其他';
        }
    };
});
//使用过滤器解析订单状态
appCtrl.filter('status',function() {
    return function(g) {
        switch (g) {
            case true:
                return '已完成';
            case false:
                return '交易失败';

            default:
                return '交易中';
        }
    };
});
