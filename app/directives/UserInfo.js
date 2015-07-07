/**
 * Created by Subbu on 7/6/15.
 */

(function (angular) {
    var module = angular.module("appDirectives");

    module.directive("userInfo", [
        "GitHubService",
        "Utils",
        function () {
            return {
                templateUrl: "./app/partials/UserInfo.html",
                restrict: "E",
                scope: "=",
                controller: function ($scope, GitHubService, Utils) {
                    $scope.user = {};
                    $scope.$watch(function () {
                        return GitHubService.User;
                    }, function () {
                        $scope.User = GitHubService.User;
                        Utils.logMsg("Got User info from directive: ", $scope.User);
                    });
                }
            }
        }]);
})(angular);