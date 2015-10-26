/**
 * Created by Subbu on 7/6/15.
 */

(function (angular) {
    var module = angular.module("appDirectives");

    module.directive("repoList", [
        "GitHubService",
        function () {
            return {
                templateUrl: "./app/partials/repoList.html",
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

                    /*$scope.viewRepo = function (repo) {
                        console.log("Get this repo " + repo.name);
                        GitHubService.selectedRepo = repo;
                        GitHubService.getEvents(repo.name);

                        $scope.$watch(function () {
                            return GitHubService.eventList;
                        }, function () {
                            $scope.eventList = GitHubService.eventList;
                            console.log($scope.eventList);
                        });
                    };*/
                }
            }
        }]);
})(angular);