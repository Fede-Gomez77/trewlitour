console.log(location.search) // lee los argumentos pasados a este formulario
var id = location.search.substr(4)
console.log(idempleado)
const { createApp } = Vue
createApp({
    data() {
        return {
            idempleado: 0,
            nombre: "",
            logros: "",
            puntos: 0,
            fecha: 0,
            url: 'DanielaST.pythonanywhere.com/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {

                    console.log(data)
                    this.idempleado = data.idempleado;
                    this.nombre = data.nombre;
                    this.logros = data.logros;
                    this.puntos = data.puntos;
                    this.fecha = data.fecha;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let empleado = {
                idempleado : this.idempleado,
                logros : this.logros,
                puntos : this.puntos,
                fecha : this.fecha
            }
            var options = {
                body: JSON.stringify(empleado),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')