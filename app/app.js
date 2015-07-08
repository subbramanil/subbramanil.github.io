/**
 * Created by Subbu on 7/6/15.
 */

(function (angular) {

    var gitHubApp = angular.module("GitHubApp", [
        "ngAnimate",
        "ngRoute",
        "appControllers",
        "appDirectives",
        "appServices"
    ]);

    gitHubApp.config([
        "$routeProvider",
        function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "content",
                    controller: "ProjectController"
                })
                .when("/repoDetails", {
                    templateUrl: "./app/partials/repoDetails",
                    controller: "RepoController"
                })
                .otherwise("/");
        }
    ]);

})(angular);
