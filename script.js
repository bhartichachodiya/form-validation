const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const form = document.getElementsByClassName('form')


function showerror(input, message) {
    const form_control = input.parentElement
    form_control.classList = "form-control-error"
    form_control.querySelector('small').innerHTML = message
}

function showsuccess(input) {
    const form_control = input.parentElement
    console.log(form_control);
    form_control.classList = "form-control-success"

}

function checkarray(inputArray) {
    const v = inputArray.forEach(element => {
        if (element.value === "") {
            showerror(element, getcapitalname(`${element.id}`) + " " + `is required`)
        } else {
            showsuccess(element)

        }
    });
}

function checkLength(input, max, min) {
    input.value.length > 10 ? showerror(input, "maximum length is 10") : showsuccess(input)
    input.value.length < 6 ? showerror(input, "minimum length is 6") : showsuccess(input)

}

function checkpassword(input1, input2) {
    input1.value != input2.value ? showerror(input2, "password should be matched") : showsuccess(input2)

}

function getcapitalname(x) {
    var z = x.charAt(0).toUpperCase() + x.slice(1);
    console.log(z)
    return z;
}
const submit = document.addEventListener('submit', function(e) {
    e.preventDefault();
    checkarray([username, email, password, password2]);
    checkLength(username, 10, 6);
    checkLength(password, 8, 4);
    checkpassword(password, password2)


})