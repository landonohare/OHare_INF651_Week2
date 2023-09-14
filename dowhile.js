let isValid = false;
do{
    let password = prompt("Enter your password:");
    let newPassword = prompt("Confirm password:");
    if(password == newPassword){
        console.log("Correct password.");
        isValid = true;
    }
    else{
        console.log("Incorrect password.");
    }
}while(!isValid);