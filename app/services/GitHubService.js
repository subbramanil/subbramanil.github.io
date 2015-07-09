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
            events: "/repos/subbramanil/course-projects/events",
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

            /*$http.get("https://yoda.p.mashape.com/yoda?sentence=hey")
                .header("X-Mashape-Key", "IoGoZvHkvGmshFZvQOnUu8xluujBp1oGrJmjsnXzHeYNL1tAxa")
                .header("Accept", "text/plain")
                .end(function (result) {
                    console.log(result.status, result.headers, result.body);
                });*/
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

        service.getEvents = function () {
            $http.get(baseURL + gitRESTUrls.events).
                success(function (result, status, headers, config) {
                    Utils.logMsg("Got Event data from server", result);
                    service.eventList = result;
                    Utils.logMsg("Most recent commit: ", service.eventList[0]);
                    /*angular.forEach(service.eventList, function (item, index) {
                        Utils.logMsg("Event Name: ", item.name);
                    });*/
                }).
                error(function (data, status, headers, config) {
                    Utils.logError("Error in fetching events ", status);
                });
        };

        service.getPages = function (repoName) {
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
        service.getEvents();
        return service;
    }]);
})(angular);