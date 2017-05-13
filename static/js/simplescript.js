window.onload = function() {
    initWordCloud();
}

function initWordCloud(){
    console.log("initWordCloud");
    var techSkills = [
        {text: "Android", weight: 13},
        {text: "Java", weight: 10.5},
        {text: "Javascript", weight: 9.4},
        {text: "AngularJS", weight: 8},
        {text: "IoT", weight: 6.2},
        {text: "Consectetur", weight: 5},
        {text: "Adipiscing", weight: 5},
    ];

    var softSkills = [
        {text: "Team Player", weight: 13},
        {text: "Quick Learner", weight: 10.5},
        {text: "Self-Motivated", weight: 9.4},
        {text: "Volunteer", weight: 8},
        {text: "Cowboy->Vogans", weight: 6.2, link: 'https://dev.to/anotherdevblog/there-are-two-types-of-engineers-be-both'},
        {text: "Consectetur", weight: 5},
        {text: "Adipiscing", weight: 5},
    ];

    $('#myTechSkillSet').jQCloud(techSkills, {
        width: 500, 
        height: 300,
        shape: 'elliptic',
        autoResize: true,
        center: {x: 0.5, y:0.5},
        delay: 5,
        colors: ["#395756", "#4F5D75", "#7261A3", "#A67DB8", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976", "#ffeda0", "#ffffcc"]
    });

    $('#mySoftSkillSet').jQCloud(softSkills, {
        width: 500, 
        height: 300,
        shape: 'rectangle',
        autoResize: true,
        center: {x: 0.5, y:0.5},
        delay: 5,
        colors: ["#BB4430", "#7EBDC2","#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976", "#ffeda0", "#ffffcc"]
    });
}