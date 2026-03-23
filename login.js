function login(){
    // getting input values
    let Username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;

    //dummy stored data (like backend)
    let correctUsername = "admin";
    let correctPassword = "1234";

    //validation
    if(Username === correctUsername && Password === correctPassword){
        alert("Login Successful");
    }
    else{
        document.getElementById("error").innerText = "Invalid Username or Password";
    }
}
