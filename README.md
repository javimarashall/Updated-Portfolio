# Updated-Portfolio

## Summary
This application contains my updated full stack developer portfolio. The application contains an about me, a recent photo, a list of my work, and a contact me section. In the application the user will greeted with a hello and a statement saying my name and welcome to my portfolio. The user is can then scroll down to the navigation bar and click on links to my contact me section or click on my resume link to download my resume. 

On the left side of the page is a sidebar that contains my photo, my name, a list of my projects and mini-projects, and the bottom my contact information and a link to my gitHub. If the user would like to see one of my projects or one of my homeworks, the user can click on the project name and screen shot of my project will show on the right side of the page. Also, at the bottom of the screenshot, a link to the project's repository page will be displayed and a live link to the deploy url will also be displayed. If the user wants to view the other projects, it is as easy as just clicking on the name of the project and the information of the previous project disappears and the information for the new project appears.

## Site
![site](./assets/images/site.png)

## Code Snippet
This code snippet represents a part of the code that makes my projects appear on the rights side of the application. When the user clicks on another of my projects, the application switches and displays the information of the next project that was clicked.   
`
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
`