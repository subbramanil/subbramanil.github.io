/**
 * Created by Subbu on 7/30/15.
 */

module.exports = function (app, reqApi) {

    var personalGitHubToken = "245dd5b7e9f47050194751e7c36e48126ff0ddbd";

    var baseURL = "https://api.github.com";
    var gitRESTUrls = {
        profile: "/users/subbramanil",
        repo: "/users/subbramanil/repos",
        events: "/repos/subbramanil/"
    };

    app.get("/profile", function (req, res) {
        console.log("Get the profile");
        reqApi.get(
            {
                url: baseURL + gitRESTUrls.profile,
                params: {
                    access_token: personalGitHubToken
                },
                headers: { //We can define headers too
                    "User-Agent": "subbramanil"
                }
            },
            function (error, response, body) {
                console.log(body);
                console.log(response.statusCode);
                if (!error && response.statusCode == 200) {
                    res.send(body);
                } else {
                    console.log(error);
                }
            }
        );
    });

    app.get("/repositories", function (req, res) {
        console.log("Get the repositories");
        reqApi.get(
            {
                url: baseURL + gitRESTUrls.repo,
                params: {
                    access_token: personalGitHubToken
                },
                headers: {
                    "User-Agent": "subbramanil"
                }
            },
            function (error, response, body) {
                console.log("Response: Body ", body);
                console.log("Response: Code ", response.statusCode);
                if (!error && response.statusCode == 200) {
                    res.send(body);
                } else {
                    console.log("Error: ", error);
                }
            }
        );
    });

    app.get("/events/:repoName", function (req, res) {
        var repoName = req.params.repoName;
        console.log("Get the events for events: "+repoName);
        reqApi.get(
            {
                url: baseURL + gitRESTUrls.events+repoName+"/events",
                params: {
                    access_token: personalGitHubToken
                },
                headers: {
                    "User-Agent": "subbramanil"
                }
            },
            function (error, response, body) {
                console.log(body);
                console.log(response.statusCode);
                if (!error && response.statusCode == 200) {
                    res.send(body);
                } else {
                    console.log(error);
                }
            }
        );
    });

};
