function signup(event){
     

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password-check').value;

    console.log(email, username, password, confirmPassword);

    if(email === "" || username === "" || password === "" || confirmPassword == ""){
        swal("OOPS!!!!!!", "Fill Up all the Columns", "warning");
		return;
    }

    if(password != confirmPassword){
        swal("OOPS!!!!!!", "Password mis-match", "warning");
		return;
    }
    window.open('/', "_self");
}