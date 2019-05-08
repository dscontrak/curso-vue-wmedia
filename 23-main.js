Vue.component('contacto',{
    props: ['data'],
    template: `<input type="email" :value="data" @input="comprobarPass($event.target.value)" ref="pass" placeholder="contacto" />`,
    methods: {
        comprobarPass(contrasena){
            if(contrasena.includes('123456')){
                // Para evitar el dato, y ponemos el valor vacio
                this.$refs.pass.value = contrasena = '' ;
            }
            
            // Regresar el valor
            this.$emit('input', contrasena);
            
        }
    }
    //template: `<input type="email" v-model="data" placeholder="contacto" />`
});

new Vue({
    el: 'main',
    data: {
        emailcontacto: 'email@ejemplo.com'
    }
});