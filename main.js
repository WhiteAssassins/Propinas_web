const historial = [];

        document.getElementById("calcular").addEventListener("click", calcularPropina);
        document.getElementById("calcular5").addEventListener("click", calcularPropina5);

        function calcularPropina() {
            const total = parseFloat(document.getElementById("total").value);
            const porcentaje = parseFloat(document.getElementById("porcentaje").value);

            if (!isNaN(total) && !isNaN(porcentaje)) {
                const propina = (total * porcentaje) / 100;
                const totalConPropina = total + propina;
                document.getElementById("resultado").innerText = `Propina: $${propina.toFixed(2)}, Total con Propina: $${totalConPropina.toFixed(2)}`;
                guardarHistorial(total, porcentaje, propina);
            } else {
                document.getElementById("resultado").innerText = "Por favor, ingrese números válidos.";
            }
        }

        function calcularPropina5() {
            const total = parseFloat(document.getElementById("total").value);
            const porcentaje = 5;

            if (!isNaN(total)) {
                const propina = (total * porcentaje) / 100;
                const totalConPropina = total + propina;
                document.getElementById("resultado").innerText = `Propina: $${propina.toFixed(2)}, Total con Propina: $${totalConPropina.toFixed(2)}`;
                guardarHistorial(total, porcentaje, propina);
            } else {
                document.getElementById("resultado").innerText = "Por favor, ingrese un número válido.";
            }
        }

        function guardarHistorial(total, porcentaje, propina) {
            historial.push({ total, porcentaje, propina });
            actualizarHistorial();
        }

        function actualizarHistorial() {
            const historialList = document.getElementById("historial");
            historialList.innerHTML = "";

            historial.forEach((item, index) => {
                const listItem = document.createElement("li");
                listItem.innerText = `Cálculo ${index + 1}: Total $${item.total.toFixed(2)}, Porcentaje ${item.porcentaje}%, Propina $${item.propina.toFixed(2)}`;
                historialList.appendChild(listItem);
            });
        }