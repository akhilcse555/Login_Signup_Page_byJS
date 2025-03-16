const form = document.getElementById('form');
const fullname_input = document.getElementById('fullname-input');
const email_input = document.getElementById('email-input');
const mobile_input = document.getElementById('mobile-input');
const password_input = document.getElementById('password-input');
const confirmpassword_input = document.getElementById('confirmpassword-input');
const error_message = document.getElementById('error-message');


form.addEventListener('submit', (e) => {
    let erorrs = []
    if(fullname_input)
    {
        erorrs = getSignupFormErrors(fullname_input.value,email_input.value,mobile_input.value,password_input.value,confirmpassword_input.value);
    }
    else
    {
        erorrs = getLoginFormerrors();
    }

    if(erorrs.length > 0)
    {
        e.preventDefault()
        error_message.innerText = erorrs.join(". ")
    }
})

function getSignupFormErrors(fullname,email,mobile,password,confirmpassword)
{
    let erorrs = []
    if(fullname === '' || fullname==null)
    {
        erorrs.push('full name is required');
        fullname_input.parentElement.classList.add('incorrect');
    }
    if(email === '' || email==null)
    {
        erorrs.push('email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if(mobile === '' || mobile==null)
    {
        erorrs.push('Mobile Number is required');
        mobile_input.parentElement.classList.add('incorrect');
    }
    if(password === '' || password==null)
    {
        erorrs.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if(confirmpassword === '' || confirmpassword==null)
    {
        erorrs.push('full name is required');
        confirmpassword_input.parentElement.classList.add('incorrect');
    }
    if(password.length < 8)
    {
        erorrs.push('Password must have atleast 8 character')
        password_input.parentElement.classList.add('incorrect');

    }
    if(password !== confirmpassword)
    {
        erorrs.push('Password does not match with Confirm password')
        password_input.parentElement.classList.add('incorrect');   
        confirmpassword_input.parentElement.classList.add('incorrect');
    }

return erorrs;
}

const allinputs = [fullname_input,email_input,mobile_input,password_input,confirmpassword_input]

allinputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText=''
        }
    })
})