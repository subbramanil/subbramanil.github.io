/**
 * Created by Subbu on 7/6/15.
 */

module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log("server is running successfully");
        res.render("cover.html");
    });

    app.get("/app/partials/home", function (req, res) {
        console.log("loading home page");
        res.render("home.html");
    });

    app.get("/app/partials/projects", function (req, res) {
        console.log("loading projects page");
        res.render("projects.html");
    });

    app.get("/app/partials/contactMe", function (req, res) {
        console.log("loading Contact me page");
        res.render("contactMe.html");
    });
};