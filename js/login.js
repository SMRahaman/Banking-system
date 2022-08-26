document.getElementById('sub_btn').addEventListener('click', function () {

    const user_email = document.getElementById('user_mail');
    const user = user_email.value;
    const user_pass = document.getElementById('user_pass');
    const pass = user_pass.value;


    if (user === 'marufshohan121@gmail.com' && pass === 'iloveu') {

        location.href = "bank.html";
    }
    else {

        alert('Invalid user')
    }

    user_email.value = "";
    user_pass.value = '';

})