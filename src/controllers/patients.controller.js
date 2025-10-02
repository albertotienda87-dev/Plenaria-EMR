// Leer (GET /api/patients)
export const getPatients = (req, res) => {
  // En el futuro, aquí leerás pacientes desde la base de datos.
  return res.status(200).send("Respuesta Get");
};

// Crear (POST /api/patients)
export const createPatient = (req, res) => {
  // const payload = req.body; // lo usaremos cuando recibamos datos reales
  return res.status(201).send("Respuesta Post"); // 201 = Created
};

// Actualizar (PUT /api/patients/:id)
export const updatePatient = (req, res) => {
  // const { id } = req.params;
  // const payload = req.body;
  return res.status(200).send("Respuesta Update");
};

// Eliminar (DELETE /api/patients/:id)
export const deletePatient = (req, res) => {
  // const { id } = req.params;
  return res.status(200).send("Respuesta Delete");
};