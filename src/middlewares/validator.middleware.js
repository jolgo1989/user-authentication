// Función de middleware para validar los datos de la solicitud usando un esquema
export const validateSchema = (schema) => (req, res, next) => {
    try {
        // Intenta validar el cuerpo de la solicitud (req.body) usando el esquema proporcionado
        schema.parse(req.body)

        // Si la validación es exitosa, continúa con el siguiente middleware o controlador
        next()
    } catch (error) {
        // Si la validación falla, responde con un estado 400 (solicitud incorrecta)
        // y envía los detalles del error en formato JSON
        res.status(400).json(error.errors.map((error) => error.message) // Detalles del error que describe qué validación falló
        )
    }
}
