function crear() {
    // Obtén los valores de los campos de entrada
    const nombre = document.getElementById("username").value;
    const id = document.getElementById("id").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("password").value;

    const mysql = require("mysql");

    // Configuración de la conexión a la base de datos
    const connection = mysql.createConnection({
        host: "localhost",
        user: "admin",
        password: "",
        database: "ecommerce",
    });

    connection.connect((err) => {
        if (err) {
            alert("Error al conectar a la base de datos:", err);
            return;
        }

        alert("Conexión exitosa a la base de datos");

        // Crea un objeto con los datos del nuevo registro
        const data = {
            Nombre: nombre,
            ID: id,
            Correo: correo,
            Contraseña: contraseña,
        };

        // Realizar la inserción en la tabla "nombre_de_la_tabla"
        connection.query(
            "INSERT INTO nombre_de_la_tabla SET ?",
            data,
            (err, results) => {
                if (err) {
                    alert("Error al realizar la inserción:", err);
                    return;
                }

                alert("Inserción exitosa");
                alert("ID del nuevo registro:", results.insertId);

                // Cerrar la conexión cuando hayas terminado
                connection.end();
            }
        );
    });
}
