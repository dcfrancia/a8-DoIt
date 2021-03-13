$(document).ready(function(){
console.log('loginPage loading...');

    // Submission
    $("#loginButton").click(function(){
        signUp();
    })
});






function signUp(){
    
    // Error check empty string

    //Leave to new window
    window.location.replace('/home');
}