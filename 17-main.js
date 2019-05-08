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
            <button class="delete"></button>
            <h4 class="is-size-5"><slot name="titulo">Notificacion</slot></h4>
            <slot>
            ---- Sin contenido ----
            </slot>
        </div>
    `
    }
);

new Vue({
    el: 'main',
});