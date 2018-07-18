let precios = [{ precio: 12 }, { precio: 10 }]
MostrarPrecioFinal()
precios.CalculaAsync = function() {
    setTimeout(function() {
        precios.forEach(elem => {
            console.log(`El valor actual es ${elem.precio}`)
        })
    }, 1000)
}

precios.CalculaAsync()
console.log('-------------------------------')

function CalcularIva(precio) {
    console.log(precio * 1.21)
}

function MostrarPrecioFinal() {
    precios.forEach(element => {
        CalcularIva(element.precio)
    })
}