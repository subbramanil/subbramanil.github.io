/**
 * Created by Subbu on 7/6/15.
 */
(function (angular) {
    var module = angular.module("appControllers");

    module.controller("RepoController", [
            "$scope",
            "GitHubService",
            function ($scope, GitHubService) {
                GitHubService.getRepos().
                    then(function (data) {
                        console.log("Service returns the list of repositories", data);
                    },
                    function (error) {
                        console.log("Service failec to return the list of repositories with the error ", error);
                    });
            }
        ]
    );
})(angular);