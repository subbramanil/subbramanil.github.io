window.onload = function() {
    console.log("onLoad");
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

    $('#mySkillSet').jQCloud(words, {
        shape: 'elliptic',
        width: 500,
        height: 350,
        autoResize: true,
        center: {x: 0.5, y:0.5},
        delay: 5,
        colors: ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976", "#ffeda0", "#ffffcc"],

    });
    console.log("initWordCloud");
}