document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === '=') {
                try {
                    display.textContent = eval(display.textContent) || '';
                } catch {
                    display.textContent = 'Error';
                }
            } else if (buttonText === 'C') {
                display.textContent = '';
            } else {
                display.textContent += buttonText;
            }
        });
    });
});
