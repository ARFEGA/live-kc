// Las promesas son una forma de resolver asincronías

function EsPromesa(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let number = Math.random()
            if (number > 0.7)
                resolve(nombre + ' Ejecución correcta ' + number)
            else
                reject(nombre + ' Ejecución errónea ' + number)
        }, 2000)
    })
}

let promesa = EsPromesa('Pepe')
promesa.then(lala => {
    console.log(lala)
}).catch(lolo => {
    console.log(lolo)
})