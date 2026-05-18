console.log("Cajero Automático");

let saldo = 1000; //aquí quería partir con un saldo no definido pero el autocompletado no me dejaba, entonces investigué: JavaScript no sabe cómo sumar un número a la "nada". El resultado de esa operación matemática es un error silencioso llamado NaN//
let retiro;
let deposito;
let opcion;

do {
    opcion = prompt("Seleccione una opción:\n1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir");
}

if (opcion === "1") {
    alert("Su saldo actual es: $" + saldo);
} else if (opcion === "2") {
    retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
    if (retiro > saldo) {
        alert("Fondos insuficientes.");
    } else {
        saldo -= retiro; //Operadores de Asignación: me dan una orden, en este caso restar y poner el total//
        alert("Retiro exitoso. Su nuevo saldo es: $" + saldo);
    }
} else if (opcion === "3") {
    deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
    saldo += deposito; //Operadores de Asignación: dan una orden en este caso sumar y poner el total//
    alert("Depósito exitoso. Su nuevo saldo es: $" + saldo);
} else if (opcion === "4") {
    alert("Gracias por usar el cajero automático.");
} else {
    alert("Opción no válida.");
}