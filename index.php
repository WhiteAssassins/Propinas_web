<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Propina</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="main.css" rel="stylesheet">
</head>
<body>
<div class="card">
        <h1 class="text-2xl font-bold mb-2">Calculadora de Propina</h1>
        <label for="total">Total de la cuenta:</label>
        <input type="number" id="total" class="w-full border rounded py-2 px-3 mb-2" placeholder="Ingrese el total">
        
        <label for="porcentaje">Porcentaje de propina:</label>
        <select id="porcentaje" class="w-full border rounded py-2 px-3 mb-2">
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
        </select>
        
        <button id="calcular" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 transition duration-300 ease-in-out transform hover:scale-105">Calcular</button>
        
        <div id="resultado" class="text-xl font-bold mb-4"></div>
        
        <h2 class="text-xl font-bold mb-2">Historial de Propinas</h2>
        <ul id="historial"></ul>
    </div>

    <script src="main.js"></script>
</body>
</html>
