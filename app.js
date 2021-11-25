const process=require("process")
const argumento= process.argv[2]
const titulo= process.argv[3]
const estado= process.argv[4]

const tareas=require("./funciones.js")


switch (argumento) {
    case "listar":
      tareas.listar()
        break;
        case "crear":
      tareas.crear(titulo,estado)
        break;
        case "buscar":
      tareas.buscarPorEstado(titulo,estado)
        break;
    case undefined:
        console.log("<<<<<              ATENCION - Tienes que pasar una accion              >>>>>>")
        break;
    default: console.log("<<<<<              NO ENTIENDO QUE QUIERES HACER              >>>>>>")
        break;
}