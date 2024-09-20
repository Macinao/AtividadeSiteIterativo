function calcular() {
    const num1 = parseFloat(document.getElementById('primeiroNumero').value);
    const num2 = parseFloat(document.getElementById('segundoNumero').value);
    const operacao = document.getElementById('operacao').value;
    
    let resultado;
    
    if (operacao === 'soma') {
        resultado = num1 + num2;
    } if (operacao === 'subtracao') {
        resultado = num1 - num2;
    } if (operacao === 'multiplicacao') {
        resultado = num1 * num2;
    } if (operacao === 'divisao') {
        resultado = num1 / num2;
    }
    
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}