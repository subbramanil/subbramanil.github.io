window.onload = function() {
    initWordCloud();
}

function initWordCloud(){
    console.log("initWordCloud");
    var words = [
        {text: "Android", weight: 13},
        {text: "Java", weight: 10.5},
        {text: "Javascript", weight: 9.4},
        {text: "AngularJS", weight: 8},
        {text: "IoT", weight: 6.2},
        {text: "Consectetur", weight: 5},
        {text: "Adipiscing", weight: 5},
    ];

    $('#myTechSkillSet').jQCloud(words, {
        shape: 'elliptic',
        width: 500,
        height: 350,
        autoResize: true,
        center: {x: 0.5, y:0.5},
        delay: 5,
        colors: ["#395756", "#4F5D75", "#7261A3", "#A67DB8"],

    });

    $('#mySoftSkillSet').jQCloud(words, {
        shape: 'rectangle',
        width: 500,
        height: 350,
        autoResize: true,
        center: {x: 0.5, y:0.5},
        delay: 5,
        colors: ["#395756", "#4F5D75", "#7261A3", "#A67DB8"],

    });
}