new Vue({
    el: '#app',
    data: {
        formulario: {
            nombre: null,
            apellidos: null,
            consulta:null,
            cliente:null,
            conocio:'Internet',
            acepto:null
        },
        opciones_conocio:[
            'Amigo o conocido',
            'Internet',
            'TV'
            ]
    },
    methods: {
        enviar(){
            for(let key in this.formulario){
                console.info(`${key} : ${this.formulario[key]}`);
            }
        }
    }
});

