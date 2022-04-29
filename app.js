
const {crearArchivo}= require ('./Helpers/multiplicar');
const argv = require ('./config/yargs');
require ('colors');

console.clear();

//const [,,arg3= 'base=5']= process.argv;
//const [ ,base=5] = arg3.split('=');

//const base = 3;

  //console.log (process.argv);
  //console.log(argv);
//console.log('base: yargs', argv.base);

crearArchivo(argv.b, argv.l, argv.h)
    .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch (err => console.log(err));
