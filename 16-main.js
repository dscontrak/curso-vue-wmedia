Vue.component('candidato', {
    /*props: ['nombre'],*/
    props: {
        nombre: {
            type: String,
            required: true
        },
        email: {
            type: String,
            default: 'email@email.com'
        }
    },
    template: '#candidato-template',
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((respuesta) => {
                    this.candidatos = respuesta.data;
                    console.log(respuesta);
                    console.log(this.candidatos);
                });
        }
    }
});

