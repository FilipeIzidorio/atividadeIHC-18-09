const inputNumero1 = document.getElementById("numero1");
const inputNumero2 = document.getElementById("numero2");
const selectOperacao = document.getElementById("operacao");
const divResultado = document.getElementById("resultado");
const buttonCalcular = document.getElementById("btnCalcular");



        function calcular() {
            const num1 = parseFloat(inputNumero1.value.trim());
            const num2 = parseFloat(inputNumero2.value.trim());

            const operacao = selectOperacao.value;

            if (isNaN(num1) || isNaN(num2)) {
                alert("Por favor, insira números válidos!");
                return;
            }

            let resultado;

            switch (operacao) {
                case 'somar':
                    resultado = num1 + num2;
                    break;
                case 'subtrair':
                    resultado = num1 - num2;
                    break;
                case 'multiplicar':
                    resultado = num1 * num2;
                    break;
                case 'dividir':
                    if (num2 === 0) {
                        alert("Não é possível dividir por zero!");
                        return;
                    }
                    resultado = num1 / num2;
                    break;
                default:
                    return;
            }

            

            divResultado.textContent = resultado;
            divResultado.style.color = "red";

            // Limpa os inputs após o cálculo
            inputNumero1.value = "";
            inputNumero2.value = "";
            
        }

        buttonCalcular.addEventListener("click", calcular);