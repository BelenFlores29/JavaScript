

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplicar al Cubo</title>
    <script>
        function calcularCubo(numero) {
            return Math.pow(numero, 3);
        }

        function mostrarResultado() {
            var inputNumero = document.getElementById('numero').value;
            var resultado = calcularCubo(inputNumero);
            document.getElementById('resultado').innerText = "El cubo de " + inputNumero + " es: " + resultado;
        }
    </script>
</head>
<body>
    <h1>Calcular el cubo de un número</h1>
    <label for="numero">Introduce un número:</label>
    <input type="number" id="numero">
    <button onclick="mostrarResultado()">Calcular</button>

    <p id="resultado"></p>
</body>
</html>