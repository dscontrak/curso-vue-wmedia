Vue.component('lista-usuarios',{props: ['datos'],
  template: `<div><strong> <slot></slot></strong><ul><li v-for="u in datos">Nombre: {{u.name}}, <dir-usuario :dirdata="u.address"></dir-usuario></li></ul></div>`
});

Vue.component('dir-usuario',{props: ['dirdata'],
  template: `<span> Ciudad:
    <span class="icon">
        <i class="fas fa-home"></i>
    </span> {{dirdata.city}} </span>`
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerUsuarios();
    },
    data: {
        usuarios: [],
    },
    methods: {
        obtenerUsuarios() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((respuesta) => {
                    this.usuarios = respuesta.data;
                    //console.log(respuesta);
                    console.log(this.usuarios);
                });
        }
    }
});