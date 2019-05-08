import Vue from 'vue';

// Este es globar y hay que tener cuidado a la hora de utilizarlo
Vue.mixin({
   created(){
       this.saludar(this.$options.nombre);
   },
   methods: {
       saludar(nombre){
           alert(`Hola desde ${nombre}`);
       }
   }
   
});

export const mixin = {
    created(){
          console.log("Created del mixin");
    },
    data () {
        return {
            aprender: [
                {nombre: 'Ionic 7'},
                {nombre: 'Node'},
                {nombre: 'MongoDB'},
                {nombre: 'Angular 3'},
                {nombre: 'Laravel'},
            ],
            nuevaTecnologia: null,
        }
    },
    methods: {
        agregarTecnologia() {
            this.aprender.unshift({
                nombre: this.nuevaTecnologia,
            });
            this.nuevaTecnologia = null;
        },
        /*saludar(){
            alert("Saludo desde el mixin");
        }*/
    }
};