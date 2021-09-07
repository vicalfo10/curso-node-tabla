const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors')

console.clear()

//const base = 2
/*let salida = ''

for( let x = 1; x <= 10; x++ ){

    salida += ` ${ base } X ${ x } = ${ base * x }\n `

}

console.log( '=======================' )
console.log( `    TABLA DEL: ${ base }` )
console.log( '=======================' )

console.log(salida)*/

/*fs.writeFile( `tabla-${ base }.txt`, salida, ( err ) => {   //Se crea archivos en disco

    if( err ) throw err

    console.log( `tabla-${ base }.txt creado` )
})*/

/*try {
    fs.writeFileSync( `tabla-${ base }.txt`, salida )       //Si todo sale bien se imprime el resultado, si sale error se tiene que meter en un try

    console.log( `tabla-${ base }.txt creado` )
} catch (error) {
    throw error
}*/

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log( err ))
