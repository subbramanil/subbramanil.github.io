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
        autoResize: true,
        center: {x: 0.5, y:0.5},
        delay: 5,
        colors: ["#395756", "#4F5D75", "#7261A3", "#A67DB8"]
    });

    $('#mySoftSkillSet').jQCloud(words, {
        shape: 'rectangle',
        autoResize: true,
        center: {x: 0.5, y:0.5},
        delay: 5,
        colors: ["#BB4430", "#7EBDC2", "#F3DFA2", "#EFE6DD"]
    });
}