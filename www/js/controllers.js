angular.module('tenday.controllers', [])

.controller('app-ctl', function($scope, $ionicModal, $timeout) {

})

.controller('list-ctl', function($scope, $http, $stateParams) {
    var type = $stateParams.type;
    var result = {};
    var params = {
        headers: {
            apikey: "70a30bd7ab0ee59921476e6b87e2113f"
        }
    }
    $http.get("http://apis.baidu.com/txapi/" + type + "/" + type + "?num=10&page=1", params)
        .success(function(res) {
            // console.log("res:%o", res);
            $scope.playlists = res.newslist;
        })
})

.controller("wy-news", function($scope, $http, $stateParams) {
    var url = "http://c.m.163.com/nc/article/list/T1348649580692/0-20.html";
    $http.get(url)
        .success(function(res) {
            $scope.list = res.T1348649580692;
        })
})
.controller("wy-detail", function($scope, $http, $stateParams) {
    var url = $stateParams.url;
    $http.get(url)
        .success(function(res) {
            $scope.content = res;
        })
})

.controller('detail-ctl', function($scope, $http, $stateParams) {
    var uri_map = {
        "163": {
            "list": "http://c.m.163.com/nc/article/list/",
            "special": "http://c.m.163.com/nc/special/"
        }
    }
    console.log("param :%o", $stateParams);
    var req = {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        },
        dataType: "application/json",
        url: uri_map["163"]["special"] + "S1460437744566.html"
    }
    $http(req).success(function(res) {
        $scope.content = res.S1460437744566.digest;
        console.log("res:%o", res)
    }).error(function(e) { console.log(e) });
    $scope._t = $stateParams.title;
    $scope._u = $stateParams.url;
});
