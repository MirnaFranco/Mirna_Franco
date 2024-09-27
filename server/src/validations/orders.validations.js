// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
export const validateOrder = async () => {
    const response = await fetch("http://localhost:8080/auth/validation", {
      method: "GET",
      credentials: "include",
    });
  
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  };
