/**
 * Created by Subbu on 7/6/15.
 */
(function (angular) {
    var module = angular.module("appControllers", []);
    module.controller("UserController", ["GoodReadsService", function (GoodReadsService) {
        GoodReadsService.getUserInfo();
    }]);
})(angular);