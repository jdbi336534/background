appCtrl.controller('goodslistController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    var vm = this;
    $http({
            url: 'http://www.woline.top/background/index.php/Home/Index/readlist',
            method: 'get'
        })
        .then(function(res) {

            $scope.resdata = res.data;
            $scope.listdata = [];
            $scope.btndata = [];
            $scope.le = $scope.resdata.length;
            $scope.lengthbtn = Math.ceil($scope.resdata.length / 5);
            for (var y = 0; y < $scope.lengthbtn; y++) {
                $scope.btndata.push(y + 1);
            }
            // console.log($scope.resdata.length)
            $scope.n = 0;
            $scope.m = 5;
            vm.fz();

        })
    vm.fz = function() {
        // console.log("开始赋值");
        // console.log($scope.n);
        // console.log($scope.m);

        for (z = $scope.n; z < $scope.m; z++) {
            $scope.listdata.push($scope.resdata[z])
        }
        // console.log($scope.listdata);
        // console.log("赋值后");
    }
    vm.reload = function() {
        $state.reload();
    };
    $scope.checkdata = '';
    $scope.changeall = function() {
        // console.log($scope.checkdata);
        $("input[name='procheck']").prop("checked", $scope.checkdata);
    }
    $scope.getindex = function(indexz1) {

        $scope.idz1 = indexz1;
        // console.log($scope.idz1);
        $scope.id = $scope.listdata[$scope.idz1].id;
        $scope.prddianpu = $scope.listdata[$scope.idz1].prddianpu;
        $scope.prdfont1 = $scope.listdata[$scope.idz1].prdfont1;
        $scope.prdfont2 = $scope.listdata[$scope.idz1].prdfont2;
        $scope.prdi = $scope.listdata[$scope.idz1].prdi;
        $scope.prdname1 = $scope.listdata[$scope.idz1].prdname1;
        $scope.prdname2 = $scope.listdata[$scope.idz1].prdname2;
        $scope.prdprice = $scope.listdata[$scope.idz1].prdprice;
        $scope.prdimgsrc = $scope.listdata[$scope.idz1].prdimgsrc;
        $scope.prdpingjia = $scope.listdata[$scope.idz1].prdpingjia;

        $scope.gengxin = function() {
            //console.log(JSON);
            $.post('http://www.woline.top/background/index.php/Home/Index/xiudatabase', {
                'id': $scope.id,
                'prddianpu': $scope.prddianpu,
                'prdfont1': $scope.prdfont1,
                'prdfont2': $scope.prdfont2,
                'prdi': $scope.prdi,
                'prdname1': $scope.prdname1,
                'prdname2': $scope.prdname2,
                'prdprice': $scope.prdprice,
                'prdimgsrc': $scope.prdimgsrc,
                'prdpingjia': $scope.prdpingjia
            }, function(data) {
                // console.log("成功");
                // console.log(data);
                vm.reload();
            });



        }

    }

    $scope.remove = function(index) {
        var msg = "您真的确定要删除吗？\n\n请确认！";
        if (confirm(msg) == true) {
            $.post('http://www.woline.top/background/index.php/Home/Index/deldata', {
                id: $scope.listdata[index].id
            }, function(data) {
                if (data == "ok") {
                    alert('删除成功！');
                    vm.reload();
                }
            });
        } else {
            return false;
        }
    }

    $scope.reall = function() {
        if ($scope.checkdata) {
            var msg = "您真的确定要删除吗？\n\n请确认！";
            if (confirm(msg) == true) {
                // console.log(1);
                $scope.listdata = [];
            } else {
                return false;
            }
        } else {
            alert("请选择您要删除的商品")
        }

    }
    $scope.additem = function() {

        $scope.addprddianpu = '';
        $scope.addprdfont1 = '';
        $scope.addprdfont2 = '';
        $scope.addprdi = '';
        $scope.addprdname1 = '';
        $scope.addprdname2 = '';
        $scope.addprdprice = '';
        $scope.addprdimgsrc = '';
        $scope.addprdpingjia = '';
        $scope.add = function() {
            $.post('http://www.woline.top/background/index.php/Home/Index/database', {
                prdprice: $scope.addprdprice,
                prdname1: $scope.addprdname1,
                prdname2: $scope.addprdname2,
                prdi: $scope.addprdi,
                prdfont1: $scope.addprdfont1,
                prdfont2: $scope.addprdfont2,
                prdpingjia: $scope.addprdpingjia,
                prddianpu: $scope.addprddianpu,
                prdimgsrc: $scope.addprdimgsrc
            }, function(data) {
                // console.log("增加后的数据");
                // console.log(data);
                vm.reload();
            })
        }
    }

    $scope.changepage = function(indexbtn) {
        // console.log(indexbtn);
        $scope.n = indexbtn * 5;
        $scope.m = $scope.n + 5;
        if ($scope.m > $scope.le) {
            $scope.m = $scope.le;
        }
        $scope.listdata = [];
        // console.log($scope.n);
        // console.log($scope.m);
        vm.fz();

    }
    $scope.pre = function() {
        if ($scope.n <= 0) {
            $scope.n == 0;
        } else {
            $scope.n = $scope.n - 5;
            $scope.m = $scope.n + 5;
            $scope.listdata = [];
            // console.log($scope.n);
            // console.log($scope.m);
            vm.fz();
        }
    }
    $scope.next = function() {
        if ($scope.n >= $scope.lengthbtn) {
            $scope.n == $scope.lengthbtn;
        } else {
            $scope.n = $scope.n + 5;
            $scope.m = $scope.n + 5;
            $scope.listdata = [];
            // console.log($scope.n);
            // console.log($scope.m);
            vm.fz();
        }
    }
    $scope.gtxq = function(cid) {

        $state.go('goodsdetail', {
            id: cid
        })

    }
}]);
