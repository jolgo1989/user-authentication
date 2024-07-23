export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        //Metodo solo para observar los errores de validación de usuario,email,password
        return res.status(400).json({ error: error.errors.map(error => error.message) })
        //return res.status(400).json({ error }) linea de codigo para observar errores de validación en detalle
    }
}