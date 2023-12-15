const operation = document.querySelector('[data-operation]');
const result = document.querySelector('[data-result]');

function insert(number) {
    const data = result.innerHTML += number;
    if (data.includes('+') || data.includes('-') || data.includes('*') || data.includes('/')) {
        operation.innerHTML += data;
        result.innerHTML = '';
    }
}

function clearAll() {
    operation.innerHTML = '';
    result.innerHTML = '';
}

function back() {
    operation.innerHTML = operation.innerText.toString().substring(0, operation.innerText.length - 1);
    result.innerHTML = '';
}

function calc() {
    const showResult = operation.innerHTML;
    const data = result.innerHTML;
    operation.innerHTML += data;
    if (operation.innerHTML) {
        result.innerHTML = eval(showResult + data);
    }

}

function percent() {
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

function plusMinus() {
    let data = result.innerHTML;
    let newData = Number(data) * -1;
    result.innerHTML = newData;
}
