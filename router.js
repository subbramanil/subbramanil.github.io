/**
 * Created by Subbu on 7/6/15.
 */

module.exports =  function(app){
    app.get("/", function (req, res) {
        res.redirect("/home");
    });

    app.get("/home", function (req, res) {
        console.log("Loading home page");
        res.render("index.html");
    });
};