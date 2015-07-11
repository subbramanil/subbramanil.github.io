/**
 * Created by Subbu on 7/6/15.
 */

module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log("server is running successfully");
        res.redirect("home");
    });

    app.get("/home", function (req, res) {
        console.log();
        res.render("index.html");
    });

    app.get("/app/partials/aboutMe", function (req, res) {
        console.log("loading aboutMe page");
        res.render("aboutMe.html");
    });

    app.get("/app/partials/projects", function (req, res) {
        console.log("loading projects page");
        res.render("projects.html");
    });

    app.get("/app/partials/repoInfo", function (req, res) {
        console.log("loading repo details page");
        res.render("repoInfo.html");
    });
};