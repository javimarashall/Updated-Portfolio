$(document).ready(() => {

    const projectData = [
        {
            projectName: "Trail Scout",
            image: "./assets/images/trail-scout.png",
            repoLink: "https://github.com/markkhoo/Trail-Scout/tree/data",
            deployLink: "https://markkhoo.github.io/Trail-Scout/",
            description: ""
        },
        {
            projectName: "Weather Dashboard",
            image: "./assets/images/weather-dashboard.png",
            repoLink: "https://github.com/javimarashall/Weather-Dashboard",
            deployLink: "https://javimarashall.github.io/Weather-Dashboard/",
            description: ""
        }, {

            projectName: "Daily planner",
            image: "./assets/images/daily-planner.png",
            repoLink: "https://github.com/javimarashall/Daily-Planner",
            deployLink: "https://javimarashall.github.io/Daily-Planner/",
            description: ""
        }
    ];
//call on event listener 
    $(".project-btn").on("click", (event) => {

        var data = null;
        switch ($(event.target).text()) {
            case "Trail Scout":
                data = projectData[0];
                break;
            case "Weather Dashboard":
                data = projectData[1];
                break;
            case "Daily Planner":
                data = projectData[2];
                break;
            default:
                break;
        }

        var template = `
            <div>
                <h2 class='text-center'>${data.projectName}</div>
                <img class='img-fluid img-thumbnail' alt='responsive image' src="${data.image}"/>
                <p>
                <button type='button' class='btn btn-light'><a href="${data.repoLink}">GitHub Repository</a></button>
                    </p>
                <p>
                <button type='button' class='btn btn-light'><a href="${data.deployLink}">Deployed URL</a></button>
                    </p>
                <p>${data.description}</p>
            </div>
            `;

        $(".template-insertion-zone").html(template);
    });


});