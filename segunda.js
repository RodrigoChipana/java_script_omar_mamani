//operadores matematicos
function sumar(primero, segundo) {
    let resultado = primero + segundo;
    return resultado
}
function restar(primero, segundo) {
    let resultado = primero - segundo;
    return resultado
}
function dividir(primero, segundo) {
    let resultado = primero / segundo;
    return resultado
}
function multiplicar(primero, segundo) {
    let resultado = primero * segundo;
    return resultado
}



//array de zapatillas con 4 objetos
let zapatillas = [
    {
        id: 1,
        nombre: "zapatillaN",
        talle: 40,
        color: "negro",
        cantMax: 3
    },
    {
        id: 2,
        nombre: "zapatillaN",
        talle: 42,
        color: "negro",
        cantMax: 3
    },
    {
        id: 3,
        nombre: "zapatillaB",
        talle: 40,
        color: "blanco",
        cantMax: 3
    },
    {
        id: 4,
        nombre: "zapatillaB",
        talle: 42,
        color: "blanco",
        cantMax: 3
    }
];

//array de remeras con 4 objetos
let remeras = [
    {
        id: 5,
        nombre: "remeraN",
        talle: "l",
        color: "negro",
        cantMax: 3 
    },
    {
        id: 6,
        nombre: "remeraN",
        talle: "xl",
        color: "negro",
        cantMax: 3 
    },
    {
        id: 7,
        nombre: "remeraB",
        talle: "l",
        color: "blanco",
        cantMax: 3 
    },
    {
        id: 8,
        nombre: "remeraB",
        talle: "xl",
        color: "blanco",
        cantMax: 3 
    }
    
]

//union de 2 arrays
let productos = zapatillas.concat(remeras);

//datos de zapatillas
const datos_zapatillas = zapatillas.map((el) => {
    return {
        id: el.id,
        nombre: el.nombre,
        talle: el.talle,
        color: el.color,
        cantMax: el.cantMax
    }
})

//datos de remeras
const datos_remeras = remeras.map((el) => {
    return {
        id: el.id,
        nombre: el.nombre,
        talle: el.talle,
        color: el.color,
        cantMax: el.cantMax
    }
})


let seleccion = prompt("Buscar mi producto por: [1] Nombre ; [2] Color ; [3] Salir");

while (seleccion != "3") {
    switch (seleccion) {
        case "1"://se buscara por nombre
            let resultadoB = prompt("Que producto desea buscar. Sugerencia: zapatilla, remera");
            if (resultadoB.toLowerCase() == 'zapatilla') {
                console.log("Estos son lo productos encontrados");
                console.log(datos_zapatillas);
                let comprar = prompt("Desea comprar alguno de los productos encontrados? [1] Si ; [2] No");
                    while (comprar == "1") {
                            let elegir = prompt("Ingrese el ID del producto");
                            switch (elegir) {
                                case "1":
                                    console.log("Se compro el producto");
                                    console.log(zapatillas[0]);
                                    alert("myObject is " + zapatillas[0]);
                                    break;
                                case "2":
                                    console.log("Se compro el producto");
                                    console.log(zapatillas[1]);
                                    break;
                                case "3":
                                    console.log("Se compro el producto");
                                    console.log(zapatillas[2]);
                                    break;
                                case "4":
                                    console.log("Se compro el producto");
                                    console.log(zapatillas[3]);
                                    break;
                                default:
                                    break;
                            }
                            comprar = prompt("Desea comprar otro producto: [1] Si ; [2] No");
                        }
            } 
            if (resultadoB.toLowerCase() == 'remera') {
                console.log("Estos son lo productos encontrados");
                console.log(datos_remeras);  
                let comprar = prompt("Desea comprar alguno de los productos encontrados? [1] Si ; [2] No");
                    while (comprar == "1") {
                        let elegir = prompt("Ingrese el ID del producto");
                        switch (elegir) {
                            case "5":
                                console.log("Se compro el producto");
                                console.log(remeras[0]);
                                break;
                            case "6":
                                console.log("Se compro el producto");
                                console.log(remeras[1]);
                                break;
                            case "7":
                                console.log("Se compro el producto");
                                console.log(remeras[2]);
                                break;
                            case "8":
                                console.log("Se compro el producto");
                                console.log(remeras[3]);
                                break;
                            default:
                                break;
                        }
                        comprar = prompt("Desea comprar otro producto: [1] Si ; [2] No");
                    }   
                    break;
            }
        break;
        case "2"://se buscara por color
            let resultadoC = prompt("Que color desea buscar. Sugerencia: blanco, negro");
            if (resultadoC.toLowerCase() == 'blanco') {
                let colorBlanco = productos.filter(productos => productos.color === "blanco");
                console.log("Los productos encontrados en color blanco son: ");
                console.log(colorBlanco);
                let comprar = prompt("Desea comprar alguno de los productos encontrados? [1] Si ; [2] No");
                    while (comprar == "1") {
                        let elegir = prompt("Ingrese el ID del producto");
                        switch (elegir) {
                            case "3":
                                    console.log("Se compro el producto");
                                    console.log(zapatillas[2]);
                                    break;
                            case "4":
                                console.log("Se compro el producto");
                                console.log(zapatillas[3]);
                                break;
                            case "7":
                                console.log("Se compro el producto");
                                console.log(remeras[2]);
                                break;
                            case "8":
                                console.log("Se compro el producto");
                                console.log(remeras[3]);
                                break;
                            default:
                                break;
                        }
                        comprar = prompt("Desea comprar otro producto: [1] Si ; [2] No");
                    }   
                    break;
            }
            }
            if (resultadoC.toLowerCase() == 'negro') {
                let colorNegro = productos.filter(productos => productos.color === "negro");
                console.log("Los productos encontrados en color negro son: ");
                console.log(colorNegro);
                let comprar = prompt("Desea comprar alguno de los productos encontrados? [1] Si ; [2] No");
                    while (comprar == "1") {
                        let elegir = prompt("Ingrese el ID del producto");
                        switch (elegir) {
                            case "1":
                                    console.log("Se compro el producto");
                                    console.log(zapatillas[0]);
                                    break;
                            case "2":
                                console.log("Se compro el producto");
                                console.log(zapatillas[1]);
                                break;
                            case "7":
                                console.log("Se compro el producto");
                                console.log(remeras[2]);
                                break;
                            case "8":
                                console.log("Se compro el producto");
                                console.log(remeras[3]);
                                break;
                            default:
                                break;
                        }
                        comprar = prompt("Desea comprar otro producto: [1] Si ; [2] No");
                    }   
                    break;
            
            }
            
            seleccion = prompt("Buscar mi producto por: [1] Nombre ; [2] Color ; [3] Salir");
            break;
            
}
    