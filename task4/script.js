const link = document.querySelector('a');


link.addEventListener('click', function (event) {
    this.textContent = prompt('Введите текст');
    event.preventDefault ();
    })

