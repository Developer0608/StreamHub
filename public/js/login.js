function login(){

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(email, password);

    window.open('/loading', "_self");
}