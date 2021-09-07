const fs = require('fs')
const colors = require('colors')

const crearArchivo = async( base = 5, listar = false, hasta) => {
    try {

        let salida  = ''
        let consola = ''

        for( let x = 1; x <= hasta; x++ ){

            consola += ` ${ base } ${'X'.green} ${ x } ${'='.green} ${ base * x }\n `
            salida += ` ${ base } $X ${ x } = ${ base * x }\n `
        }

        if ( listar == true ) {

            console.log( '======================='.green )
            console.log( '    TABLA DEL:'.green, colors.red( base ) )
            console.log( '======================='.green )

            console.log(consola)
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida )       //Si todo sale bien se imprime el resultado, si sale error se tiene que meter en un try

        return `tabla-${ base }.txt creado`

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}