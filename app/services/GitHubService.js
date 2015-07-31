/**
 * Created by Subbu on 7/6/15.
 */

(function (angular) {
    var module = angular.module("appServices");

    module.service("GitHubService", ["$http", "Utils", function ($http, Utils) {

        var service = {};

        service.selectedRepo = {};

        service.getUserInfo = function () {
            console.log("Make call to node server");
            $http.get("/profile").
                success(function (result, status, headers, config) {
                    Utils.logMsg("Got User data from server", result);
                    service.User = result;
                }).
                error(function (data, status, headers, config) {
                    Utils.logError("Error in fetching User info", status);
                });
        };

        service.getRepositories = function () {
            console.log("Make call to node server");
            $http.get("/repositories").
                success(function (result, status, headers, config) {
                    service.repoList = result;
                    angular.forEach(service.repo, function (item, index) {
                        Utils.logMsg("Repo Name: ", item.name);
                        service.getEvents(item.name);
                    });
                }).
                error(function (data, status, headers, config) {
                    Utils.logError("Error in fetching repo info", status);
                });
        };

        service.getEvents = function (repoName) {
            console.log("Make call to node server");
            $http.get("/events/"+repoName).
                success(function (result, status, headers, config) {
                    service.eventList = result;
                    Utils.logMsg("Most recent commit: ", service.eventList[0]);
                }).
                error(function (data, status, headers, config) {
                    Utils.logError("Error in fetching repo info", status);
                });
        };

        service.getUserInfo();
        service.getRepositories();
        return service;
    }]);
})(angular);