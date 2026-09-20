// Notificación de éxito con Toastify
const mostrarExito = (mensaje = "✅ ¡Registro exitoso!") => {
    if (typeof Toastify !== 'undefined') {
        Toastify({
            text: mensaje,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "rgba(0, 128, 0, 0.8)",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                padding: "12px 20px"
            },
            stopOnFocus: true,
        }).showToast();
    } else {
        alert(mensaje);
    }
};

// Notificación de error con Toastify
const mostrarError = (mensaje = "❌ Ocurrió un error") => {
    if (typeof Toastify !== 'undefined') {
        Toastify({
            text: mensaje,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "rgba(220, 53, 69, 0.9)",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                padding: "12px 20px"
            },
            stopOnFocus: true,
        }).showToast();
    } else {
        alert(mensaje);
    }
};

// Compatibilidad con el código anterior
const mostrarAlerta = mostrarExito;