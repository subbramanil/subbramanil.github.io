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

    app.get("/app/partials/content", function (req, res) {
        console.log("loading content page");
        res.render("content.html");
    });

    app.get("/app/partials/repoDetails", function (req, res) {
        console.log("loading repo details page");
        res.render("RepoInfo.html");
    });
};