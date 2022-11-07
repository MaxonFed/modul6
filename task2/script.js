const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});


const Alert = document.querySelector('#alert');
Alert.addEventListener('click', () => {
    alert('Служит для вывода информации в диологовое окно с сообщением и кнопкой ОК')
});

const Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', () =>{
    alert('Служит для отображение диалогового окна запросом на ввод текст')
});