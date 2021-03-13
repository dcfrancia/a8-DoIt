// function addItem(){
//     var userInput = document.getElementById('textInput').value;
//     // var liNode = document.createElement('li');
//     var txtNode = document.createTextNode(userInput);

//     liNode.appendChild(txtNode);
//     document.getElementById('myList').appendChild(liNode);

//     listNode.appendChild(liNode);
// }

// function addItem(){
//     var userInput = document.getElementById('textInput').value;
//     var url = "/home" + encodeURIComponent(userInput);
//     document.location.href = url;
// }

$(document).ready(function(){
    console.log('addTask loading...');
    const myTextInput = document.getElementById('textInput');

    const myCharCount = document.getElementById("charCount");
    
    const MAX_COUNT = 24;
    
    myTextInput.addEventListener('input', () => {
    
        myTextInput.value = myTextInput.value.substring(0,MAX_COUNT);
        myCharCount.innerText = MAX_COUNT;
        const remainingChar = MAX_COUNT - myTextInput.value.length;
        // Turn color red if reach max count
        const maxColor = remainingChar === 0 ? 'red' : null;
        myCharCount.textContent = `${remainingChar} characters left`;
        myCharCount.style.color = maxColor;
        
    });

    // Submission
    $("#addButton").click(function(){
        addDoIt();
        
    })

});

function addDoIt(){
    
    // Error check empty string

    //Leave to new window
    window.location.replace('/home');
}
