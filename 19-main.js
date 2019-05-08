Vue.component('alerta',{
    props:
    {   
        clase:{
            type: String,
            default: 'is-primary',
        }
        
    },
    computed: {
        claseNotificacion(){
            return 'notification ' + this.clase;
        }  
    },
    template: `
        <div :class="claseNotificacion">
            <button class="delete" @click="ocultarNotif"></button>
            <h4 class="is-size-5"><slot name="titulo">Notificacion</slot></h4>
            <slot>
            ---- Sin contenido ----
            </slot>
        </div>
    `,
    methods: {
        ocultarNotif(){
            this.$emit('ocultar');
        }
    }
});

new Vue({
    el: 'main',
    data: {
        mostrarNormal: false,
        mostrarError: false,
        mostrarAdvertencia: false
    }
});