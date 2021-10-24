/* Add your JavaScript to this file */
function subscription(){ 
    var button = document.getElementsByTagName("button")[0];
    var regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    button.addEventListener("click",function(e){
        var email= document.getElementById("email").value;
        e.preventDefault();
        if(email.match(regexp)){
            document.getElementsByClassName("message")[0].innerHTML = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
        else{
            document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address.";
        }
    });
}
window.onload=subscription;