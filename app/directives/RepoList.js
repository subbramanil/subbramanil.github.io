/**
 * Created by Subbu on 7/6/15.
 */

(function (angular) {
    var module = angular.module("appDirectives");

    module.directive("repoList", [
        "GitHubService",
        function () {
            return {
                templateUrl: "./app/partials/RepoList.html",
                restrict: "E",
                scope: "=",
                controller: function ($scope, GitHubService) {
                    $scope.repoList = [];
                    $scope.$watch(function () {
                        return GitHubService.repoList;
                    }, function () {
                        $scope.repoList = GitHubService.repoList;
                        console.log($scope.repoList);
                    });
                }
            }
        }]);
})(angular);