/**
 * Created by Subbu on 7/6/15.
 */

module.exports = function (app, reqApi) {

    var qs = require('querystring');

    var params = {
        client_id: "85a76b9be1ff1495916d",
        redirect_uri: "http://localhost:3031/home",
        //redirect_uri: "http://subbramanil.github.io/home",
        scope: "",
        state: "mani"
    };

    app.get("/", function (req, res) {
        var oauthReqParams = {
            client_id:"85a76b9be1ff1495916d"
        };
        res.redirect("https://github.com/login/oauth/authorize?" + qs.stringify(oauthReqParams));
    });

    app.get("/home", function (req, res) {
        console.log("Loading home page");
        var reqCode = req.query.code;

        reqApi.post(
            'https://github.com/login/oauth/access_token',
            {
                form: {
                    client_id: "85a76b9be1ff1495916d",
                    client_secret:"2eb6a21f53a7e10836c79ad1e95151923b486ad7",
                    code:reqCode,
                    redirect_uri:"http://localhost:3031/home",
                    state:"user"
                }
            },
            function (error, response, body) {
                console.log(response.statusCode);
                var accessToken = qs.parse(body).access_token;
                console.log("Access Token: "+ accessToken);
                if (!error && response.statusCode == 200) {
                    console.log("Success");
                }else{
                    console.log(error);
                }
            }
        );
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