/* Add your JavaScript to this file */
function subscription(){ 
    var butn = document.getElementsByTagName("button")[0];
    var regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    butn.addEventListener("click",function(e){
        var email= document.getElementById("email").value;
        e.preventDefault();
        if(email.match(regexp)){
            document.getElementsByClassName("message")[0].innerHTML = `Thank you! Your email address ${email} has been added to our mailing list`;
        }
        else{
            document.getElementsByClassName("message")[0].innerHTML = "Please Input Valid Email Address";
        }
    });
}
window.onload=subscription;