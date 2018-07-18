let precios = { precio: 12, iva: 1.21 }

precios.CalculaAsync = function() {
    setTimeout(() => {
        console.log(`El valor actual es ${this.precio * this.iva}`)
    }, 1000)
}

precios.CalculaAsync()
console.log('-------------------------------')