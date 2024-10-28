
function verifyPasswords() {
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;

    if(pass1.length < 8){
        alert("Length of 1st password is less than 8 characters!");
    }
    else if(pass2.length < 8){
        alert("Length of 2nd password is less than 8 characters!");
    }
    else if(pass1 != pass2){
        alert("The 2 passwords do not match!");
    }
    else{
        alert("Passwords successfully verified!");
    }
}