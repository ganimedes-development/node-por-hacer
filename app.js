const colors = require('colors');
const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');





let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);

        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=========Por hacer============='.green);
            console.log(tarea.descripcion);
            console.log(`Estado de la tarea: ${ tarea.completado }`);
            console.log('==============================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Este comando no esta definido');
};