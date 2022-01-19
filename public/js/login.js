function login(){

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(email, password);

    if(email === ""){
        swal("Please specify email address");
        return;
    }

    if(password === ""){
        swal("Please enter the password");
        return;
    }
    // window.open('/loading', "_self");
}

function otp(){

    window.open('/otp', "_self");
}

function passwordreset(){
    window.open('/reset-password', "_self");
}