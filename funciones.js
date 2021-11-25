const fs = require("fs")


module.exports = {
    tareas: JSON.parse(fs.readFileSync("./listaDeTareas.json", "utf-8")),
    listar: function () {
        this.tareas.forEach(tarea => {
            console.log(`Titulo : ${tarea.titulo} Estado=> ${tarea.estado}`);
        });
    },
    crear: function (titulo, estado = "pendiente") {
        let tarea = {
            titulo,
            estado
        }
        tarea = this.tareas.push(tarea)
        this.guardar(this.tareas)
    },
    guardar: function (tareas) {
        fs.writeFileSync("./listaDeTareas.json", JSON.stringify(tareas, null, 2), "utf-8")
    },
    buscarPorEstado: function (estado) {
        this.tareas.filter(function (elemento) {
            if (elemento.estado == estado) {
                console.log(`*Titulo: ${elemento.titulo} *Estado => ${elemento.estado}`)
            } if (process.argv[3] == undefined) { console.log(`No tienes tareas ${process.argv[3]}`); };
        })
    }
}