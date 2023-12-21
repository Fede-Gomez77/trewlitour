const { createApp } = Vue
createApp({
    data() {
        return {
            empleados: [],
            //url:'http://localhost:5000/productos',
            // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
            url: 'https://DanielaST.pythonanywhere.com/empleados/' + id, // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            idempleado: 0,
            nombre: "",
            logros: "",
            puntos: 0,
            fecha: 0,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)

                .then(response => response.json())
                .then(data => {
                    this.empleados = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(empleado) {
            const url = this.url + '/' + empleado;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },
        grabar() {
            let empleado = {
                nombre: this.nombre,
                logros: this.logros,
                puntos: this.puntos,
                fecha: this.fecha
            }
            var options = {
                body: JSON.stringify(empleado),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")

                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
