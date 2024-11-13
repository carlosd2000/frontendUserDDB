// crear la URL base de la API
const API_URL = "http://localhost:5000/items";

// funcion para obtener todos los elementos
// async se usa para inicializa una funcion y await espera la respuesta
export const getItems = async () => {
    // fetch hace referencia al url de donde saca la info
    const response = await fetch(API_URL);
    return await response.json();
};

// funcion para CREAR
export const addItem = async (item) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(item),
    });
    return await response.json();
};

// funcion para ACTUALIZAR

export const updateItem = async (id, item) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(item),
    });
    return await response.json();
};

// funcion para ELIMINAR

export const deleteItem = async (id) => {
    await fetch(`${API_URL}/${id}` , {
        method: "DELETE"
    });
}