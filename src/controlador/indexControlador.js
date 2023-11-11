//EL controlador realiza las peticiones al modelo
const controller = {};
//Indicamos la vista de inicio de sesión
// controller.index = (req, res) => {

// res.render('login');
// }

//Controlador para proveedores
// Mostrar contenido de la tabla de proveedores
controller.index = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from proveedores', (err, rowsAuto) => {
            if (err) {
                res.json(err);
            }
            console.log(rowsAuto);
            res.render('proveedores', {
                data: rowsAuto
            });
        });
    });
};

//Almacenar datos
controller.saveP = (req, res) => {
    const datosA = req.body;
    req.getConnection((err, conn) => {
        conn.query('insert into proveedores set ?', [datosA], (err, datosA) => {
            res.redirect('/');
        });
    });
};
// //colocamos la eliminacion del dato donde colocamos un err y un rows y luego le hacemos la seleccion del id con un err y un row y la coneccion directa con la raiz '/'
controller.deleteE = (req, res) => {
    req.getConnection((err, conn) => {
        var id = 0;
        id = req.params.id;
        console.log('ingreso a borrar');
        console.log(id);
        conn.query('delete from proveedores where id = ?', [id], (err, rowsAuto) => {
            res.redirect('/');
        });
    });
};
// consulta detallada de un registro
controller.editE = (req, res) => {
    let id = 0;
    id = req.params.id;
    console.log(id);
    req.getConnection((err, conn) => {
        conn.query('select * from proveedores where id = ?',
            [id], (err, rowsAuto) => {
                res.render('proveedor_edit', {
                    data: rowsAuto[0]
                });
            });
    });
};
//Modificar datos
controller.updateE = (req, res) => {
    const id = req.params.id;
    const nomEmpresa = req.body.nomEmpresa;
    const direccion = req.body.direccion;
    const ciudad = req.body.ciudad;
    const estado = req.body.estado;
    const codigoP = req.body.codigoP;
    const correoElec = req.body.correoElec;
    const telefono = req.body.telefono;

    req.getConnection((err, conn) => {
        // console.log('ingreso a modificar');
        conn.query('UPDATE proveedores SET nomEmpresa = ?, direccion = ?, ciudad = ?, estado = ?, codigoP = ?, correoElec = ?, telefono = ? WHERE id = ?', [nomEmpresa, direccion, ciudad, estado, codigoP, correoElec, telefono, id], (err, result) => {
            if (err) {
                console.log(err);
                res.send('Error al actualizar el estudiante');
            } else {
                console.log('Estudiante actualizado exitosamente');
                res.redirect('/');
            }
        });
    });
};

//Exportamos el objeto
module.exports = controller;