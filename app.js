const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv);

const comando = argv._[0];

switch (comando) {
  case 'listar':
    console.log('listar');
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    console.log('crear');
    crearArchivo(argv.base, argv.limite)
      .then(nombreArchivo => {
        console.log(`Archivo creado ${colors.green(nombreArchivo)}`);
      })
      .catch(err => {
        console.log(err);
      });
    break;

  default:
    console.log('Comando no reconocido');
    break;
}

// const argv2 = process.argv;
// const parametro = argv[2];
// const base = +parametro.split('=')[1];

// console.log('Yargs base', argv.base);
// console.log('Yargs limite', argv.limite);
// console.log('Procesos', argv2);







