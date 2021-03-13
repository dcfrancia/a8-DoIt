$(document).ready(function(){
console.log('homePage loading');


    // Submission
    $("#homeButton").click(function(){
        createTaskButton();
    })
});

function createTaskButton(){
    // Error check empty string

    //Leave to new window
    window.location.replace('/addTask');
}