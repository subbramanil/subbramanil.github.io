/**
 * Created by Subbu on 7/6/15.
 */

(function (angular) {
    var module = angular.module("appServices");

    module.service("GitHubService", ["$http", "Utils", function ($http, Utils) {

        var baseURL = "https://api.github.com";
        var gitRESTUrls = {
            profile: "/users/subbramanil",
            repo: "/users/subbramanil/repos",
            events: "/repos/subbramanil/"
        };

        var service = {};

        service.getUserInfo = function () {
            $http.get(baseURL + gitRESTUrls.profile).
                success(function (result, status, headers, config) {
                    Utils.logMsg("Got User data from server", result);
                    service.User = result;
                }).
                error(function (data, status, headers, config) {
                    Utils.logError("Error in fetching User info", status);
                });
        };

        service.getRepositories = function () {
            $http.get(baseURL + gitRESTUrls.repo).
                success(function (result, status, headers, config) {
                    Utils.logMsg("Got Repo data from server", result);
                    service.repoList = result;
                    angular.forEach(service.repo, function (item, index) {
                        Utils.logMsg("Repo Name: ", item.name);
                        service.getEvents(item.name);
                    });
                }).
                error(function (data, status, headers, config) {
                    Utils.logError("Error in fetching repo ", status);
                });
        };

        service.getEvents = function (repoName) {
            $http.get(baseURL + gitRESTUrls.events+repoName).
                success(function (result, status, headers, config) {
                    Utils.logMsg("Got Repo data from server", result);
                    service.eventList = result;
                    /*angular.forEach(service.eventList, function (item, index) {
                        Utils.logMsg("Event Name: ", item.name);
                    });*/
                }).
                error(function (data, status, headers, config) {
                    Utils.logError("Error in fetching events ", status);
                });
        };

        service.getUserInfo();
        service.getRepositories();
        return service;
    }]);
})(angular);