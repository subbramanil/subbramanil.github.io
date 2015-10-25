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
                    templateUrl: "./app/partials/home"
                })
                .when("/home", {
                    templateUrl: "./app/partials/home"
                })
                .when("/contactMe", {
                    templateUrl: "./app/partials/contactMe"
                })
                .when("/projects", {
                    templateUrl: "./app/partials/projects"
                })
                .otherwise("/");
        }
    ]);

})(angular);
