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
                    templateUrl: "./app/partials/aboutMe"
                })
                //.when("/aboutMe", {
                //    templateUrl: "./app/partials/aboutMe"
                //})
                .when("/projects", {
                    templateUrl: "./app/partials/projects"
                })
                .when("/repoInfo", {
                    templateUrl: "./app/partials/repoInfo",
                    controller: "RepoController"
                })
                .otherwise("/");
        }
    ]);

})(angular);
