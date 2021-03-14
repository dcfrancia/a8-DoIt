$(document).ready(function(){
console.log('loginPage loading...');


    // Submission
    $("#loginButton").click(function(){
        signUp();
    })
});






function signUp(){
    

    //Leave to new window
    window.location.replace('/home');
}