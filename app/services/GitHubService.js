/**
 * Created by Subbu on 7/6/15.
 */

(function (angular) {
    var module = angular.module("appServices");

    module.service("GitHubService", [
        "$http",
        "$q",
        function ($http, $q) {

            var service = {};

            service.repoList = {};

            service.selectedRepo = {};

            function getRepositories() {
                console.log("Get a list of repositories: ");
                var defer = $q.defer();
                $http(
                    {
                        method: "get",
                        url: "/repositories"
                    }
                ).then(function (response) {
                        console.log("Response: ", response.data);
                        service.repoList = response.data;
                        defer.resolve(response.data);
                    },
                    function (error) {
                        console.log("Error: ", error.data);
                        defer.resolve(error);
                    });
                return defer.promise;
            }

            /*service.getUserInfo = function () {
                console.log("Make call to node server");
                $http.get("/profile").
                    success(function (result, status, headers, config) {
                        console.log("Got User data from server", result);
                        service.User = result;
                    }).
                    error(function (data, status, headers, config) {
                        console.log("Error in fetching User info", status);
                    });
            };

            service.getRepositories = function () {
                console.log("Make call to node server");
                $http.get("/repositories").
                    success(function (result, status, headers, config) {
                        service.repoList = result;
                        angular.forEach(service.repo, function (item, index) {
                            console.log("Repo Name: ", item.name);
                            service.getEvents(item.name);
                        });
                    }).
                    error(function (data, status, headers, config) {
                        console.log("Error in fetching repo info", status);
                    });
            };

            service.getEvents = function (repoName) {
                console.log("Make call to node server");
                $http.get("/events/" + repoName).
                    success(function (result, status, headers, config) {
                        service.eventList = result;
                        console.log("Most recent commit: ", service.eventList[0]);
                    }).
                    error(function (data, status, headers, config) {
                        console.log("Error in fetching repo info", status);
                    });
            };*/

            service = {
                getRepos: getRepositories
            };

            console.log(service);

            return service;
        }]);
})(angular);