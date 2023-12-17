const operation = document.querySelector('[data-operation]');
const result = document.querySelector('[data-result]');

function insert(number) {
    if (result.innerHTML === '+' || result.innerHTML === '-' || result.innerHTML === '*' || result.innerHTML === '/') {
        clearAll()
    }
    if (result.innerHTML.includes('..') || result.innerHTML.includes('++') || result.innerHTML.includes('--') || result.innerHTML.includes('**') || result.innerHTML.includes('//')) {
        alert("Error")
        clearAll()
        return
    }
    result.innerHTML += number;
    operation.innerHTML = ""
}

function clearAll() {
    operation.innerHTML = '';
    result.innerHTML = '';
}

function back() {
    result.innerHTML = result.innerText.toString().substring(0, result.innerText.length - 1);
    operation.innerHTML = '';
}

function calc() {
    if (result.innerHTML[result.innerHTML.length - 1] === '+' || result.innerHTML[result.innerHTML.length - 1] === '-' || result.innerHTML[result.innerHTML.length - 1] === '*' || result.innerHTML[result.innerHTML.length - 1] === '/' || result.innerHTML[result.innerHTML.length - 1] === '.') {
        alert("Error")
        clearAll()
        return
    }
    if (result.innerHTML === '+' || result.innerHTML === '-' || result.innerHTML === '*' || result.innerHTML === '/') {
        clearAll()
    }
    const showOperation = operation.innerHTML;
    const data = result.innerHTML;
    if (data.includes('+') || data.includes('-') || data.includes('*') || data.includes('/')) {
        operation.innerHTML += data;
        if (operation.innerHTML) {
            result.innerHTML = eval(showOperation + data);
        }
    }
}

function percent() {
    if (!((result.innerHTML.includes('+')) || (result.innerHTML.includes('-')) || (result.innerHTML.includes('*')) || (result.innerHTML.includes('/')))) {
        result.innerHTML = 0;
        operation.innerHTML = 0;
    } else if (result.innerHTML.length === 0) {
        return;
    } else {
        const data = result.innerHTML;
        operation.innerHTML += data;
        const percentage = eval(result.innerHTML) / 100;
        result.innerHTML = percentage;


        if (operation.innerHTML.includes('+')) {
            const num1 = operation.innerHTML.split('+')[0];
            const num2 = operation.innerHTML.split('+')[1];
            const newNum1 = Number(num1);
            const newNum2 = Number(num2);
            const percentage = newNum2 / 100;
            const times = newNum1 * percentage;
            const total = newNum1 + times;
            result.innerHTML = total;
        } else if (operation.innerHTML.includes('-')) {
            const num1 = operation.innerHTML.split('-')[0];
            const num2 = operation.innerHTML.split('-')[1];
            const newNum1 = Number(num1);
            const newNum2 = Number(num2);
            const percentage = newNum2 / 100;
            const times = newNum1 * percentage;
            const total = newNum1 - times;
            result.innerHTML = total;
        }
    }
}

function plusMinus() {
    if (result.innerHTML.length === 0) {
        return;
    }
    let data = result.innerHTML;
    let newData = Number(data) * -1;
    result.innerHTML = newData;
}
