const num1 = +prompt('enter number', '');
const num2 = +prompt('eneter second number', '');

if (!num1 || !num2) {
    alert('error')
} else {

    const operation = prompt('enter the action please (add, sub, mult, div)', '')

    switch (operation) {
        case 'div':
            alert(`${num1} / ${num2} = ${num1 / num2} `);
            break;

        case 'mult':
            alert(`${num1} * ${num2} =${num1 * num2} `);
            break;

        case 'add':
            alert(`${num1} + ${num2} =${num1 + num2} `);
            break;

        case 'sub':
            alert(`${num1} - ${num2} = ${ num1 - num2} `);
            break;
        default:
            alert('unknown operation');

    }
}