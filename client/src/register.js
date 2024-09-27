// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ
 // Función para eliminar un usuario
 function deleteTodo(registerId) {
    fetch(`http://localhost:4321/todos/${registerIdId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(() => {
      alert('Usuario eliminado exitosamente');
      location.reload(); // Refresca la página para mostrar los cambios
    })
    .catch((error) => {
      console.error('Error eliminando al usuario:', error);
    });
  }
;


import "./style.css";
