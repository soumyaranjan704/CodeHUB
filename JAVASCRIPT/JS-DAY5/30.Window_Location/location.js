

function x () {
    //When you click the button you will see the host name.
    document.getElementById("demo").innerHTML = 
"Page hostname is: " + window.location.hostname;
}


function y () {
    //When you click the button you will see the Full path of current page .
    document.getElementById("demo").innerHTML = 
"Page hostname is: " + window.location.href;
}