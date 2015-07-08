/**
 * Created by Subbu on 7/6/15.
 */

module.exports = function (app) {

    var params = {
        client_id: "85a76b9be1ff1495916d",
        redirect_uri: "http://localhost:3031/home",
        scope: "",
        state: "mani"
    };

    app.get("/", function (req, res) {
        var oauthReqParams = "client_id=" + encodeURIComponent(params.client_id)
            + "&redirect_uri=" + encodeURIComponent(params.redirect_uri);
        res.redirect("https://github.com/login/oauth/authorize?" + oauthReqParams);
    });

    app.get("/home", function (req, res) {
        console.log("Loading home page");
        var request = require('request');

        request.post(
            'https://github.com/login/oauth/access_token',
            {
                form: {
                    client_id: "85a76b9be1ff1495916d",
                    client_secret:"2eb6a21f53a7e10836c79ad1e95151923b486ad7",
                    code:"b25d6a011fa9457ef803",
                    redirect_uri:"http://localhost:3031/home",
                    state:"test"
                }
            },
            function (error, response, body) {
                console.log(response.statusCode);
                if (!error && response.statusCode == 200) {
                    //console.log(body);
                }
            }
        );
        res.render("index.html");
    });
};