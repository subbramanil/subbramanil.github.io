/**
 * Created by Subbu on 7/6/15.
 */
(function (angular) {
    var module = angular.module("appControllers", []);

    module.controller("RepoController", [
            "$scope",
            "GitHubService",
            "Utils",
            function ($scope, GitHubService, Utils) {
                $scope.selectedRepo = GitHubService.selectedRepo;
                Utils.logMsg("User selected Repo", $scope.selectedRepo);
            }
        ]
    );
})(angular);