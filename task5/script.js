const Input = document.querySelector('input');
let p = document.querySelector('#duplicateField');

Input.addEventListener('keyup', function (event) {
    
    p.textContent = event.target.value;
});

const Button = document.querySelector('button').addEventListener('click', function(event) {
    let i = Input.value;
    console.log(i);
    Input.value = '';
    p.textContent = event.target.value;
});



