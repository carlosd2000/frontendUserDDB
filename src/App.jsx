import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { getItems, addItem, updateItem, deleteItem } from "./service/itemService";

// inicializamos la funcion
function App () {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({name: "", description: ""});
  const [editingId, setEditingId] = useState(null);

  // cargue de los items ingresados
  useEffect(()=> {
    loadItems();
  }, []);

  // obtenga los datos ingresados para la lista
  const loadItems = async() => {
    const data = await getItems();
    setItems(data);
  };

  // Aqui solicitamos al usuario que debe ingresar  valor de nombre
  const handleChangle = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  // aqui espesificamos las acciones de botontes

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (editingId) {
      await updateItem (editingId, form);
      Swal.fire ({
        title: "ACTUALIZADO",
        text: "datos acutalizados con exito",
        icon: 'success',
        confirmButtonText: "OK",
      });
      setEditingId(null);
    } else {
      await addItem(form);
      Swal.fire({
        title: "datos ingresados",
        text: "usuraio ingresaso con exito",
        icon: 'success',
        confirmButtonText: "OK",
      });
    }
    setForm({name: "", email: "", contraseña: ""});
    loadItems();
  };
  // ventana que espesifica que persona se edita
  const handleEdit = (item) =>{
    setForm(item)
    setEditingId(item.id);
    Swal.fire({
      title: "modo de edicion",
      text: `editando a ${item.name}`,
      icon: 'info',
      confirmButtonText: "si, entiendo",
    });
  };

  // ventana emergente para ELIMINAR
  const handleDelete = async (id) => {
    const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    });
    // si da click en confirmar el usuario se elimina
    if (result.isConfirmed) {
      await deleteItem(id);
      Swal.fire("Eliminado", "El elemento ha sido eliminado.", "success");
      loadItems();
    } 
  };

  return (
    <div className="container">
      <h1>CRUD APP con react , vite y express</h1>
      <form onSubmit={handleSubmit}>
        <input name="name"
        placeholder="digita el nombre"
        value={form.name} 
        onChange={handleChangle}/>
        <input name="email"
        placeholder="digita el correo"
        value={form.email} 
        onChange={handleChangle}/>
        <input name="contraseña"
        placeholder="digita la contraseña"
        value={form.contraseña} 
        onChange={handleChangle}/>
        <button type="submit">{editingId ? "Actualizar" : "Agregarlo"}</button>
        </form>
        <div className="item-list">
          {items.map((item) =>(
            <div key={item._id} className="item">
              <span>
                <strong>{item.name}</strong>: {item.email} : {item.contraseña}
              </span>
              <div className="item-buttons">
                <button className="edit-btn" onClick={() => handleEdit(item)}>
                  Editar
                </button>
                <button className="delete-btn" onClick={() => handleDelete(item._id)}>
                  Eliminar
                </button>

              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default App;






