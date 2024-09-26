const express = require("express");
const cors = require('cors'); //termina: npm i cors
const dbconnect = require("./config");
const app = express();

app.use(express.json());
app.use(cors({origin:'*'})) // el asterisco es para que se conecte a todas las rutas que hemos creado de manera remota en el servidor de mongodb
app.use('/api/usuarios',require('./rutas/usuario.rutas'));
app.use('/api/empleados',require('./rutas/empleado.rutas'));
//app.listen(3005, ()=> {
//    console.log("El servidor esta en el puerto 3005")
//})
//reemplazo el comentario de arriba por:
app.listen(process.env.PORT || 3005, () => {
  console.log(`El servidor está corriendo en el puerto ${process.env.PORT || 3005}`);
});


dbconnect();
