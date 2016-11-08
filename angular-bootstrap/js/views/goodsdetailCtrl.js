appCtrl.controller('goodsdetailController', ['$scope', '$http','$state', function($scope, $http,$state){
    var i=0;
    $http({
      url: 'http://www.woline.top/background/index.php/Home/Index/readlist'
    }).then(function(res){
      // console.log($state);
      $scope.goodsdetail = res.data[0];
      if($state.params.id != null){
        for(i=0;i<res.data.length;i++){
          if($state.params.id == res.data[i].id){
            $scope.goodsdetail = res.data[i];
            break;
          }
        }
      }
      $scope.title = $scope.goodsdetail.prdname1+$scope.goodsdetail.prdfont1+$scope.goodsdetail.prdi+$scope.goodsdetail.prdfont2+$scope.goodsdetail.prdname2;
      $scope.heightprice = ($scope.goodsdetail.prdprice*1.2).toFixed(2);
    });

    $http({
      url: '/angular-bootstrapcxx/mock/detail.json'
    }).then(function(res){
      $scope.nochange = res.data;
    });
  $scope.reset = function(){
    $http({
      url: 'http://www.woline.top/background/index.php/Home/Index/readlist'
    }).then(function(res){
      if(i<res.data.length){
        $scope.goodsdetail = res.data[i];
      }else{
        $scope.goodsdetail = res.data[0];
      }
    });
  }

  $scope.gengxin=function(){
      	$.post('http://www.woline.top/background/index.php/Home/Index/xiudatabase',{
          'id':$scope.goodsdetail.id,
          'prddianpu':$scope.goodsdetail.prddianpu,
          'prdfont1':$scope.goodsdetail.prdfont1,
          'prdfont2':$scope.goodsdetail.prdfont2,
          'prdi':$scope.goodsdetail.prdi,
          'prdname1':$scope.goodsdetail.prdname1,
          'prdname2':$scope.goodsdetail.prdname2,
          'prdprice':$scope.goodsdetail.prdprice,
          'prdimgsrc':$scope.goodsdetail.prdimgsrc,
          'prdpingjia':$scope.goodsdetail.prdpingjia
        },function(data){
          console.log("成功");
          console.log(data);
        });

    }
}]);
