new Vue({
    el: '#app',
    data: {
        checar: null,
        unaopcion: null,
        multiple:'',
        a: {estado: 'elegido'  },
        b: {estado: 'sinelegir'},
        retardo: null,
        trimeado: null,
        numerico: null
        
    },
    methods: {
        enviar(){
            alert("Se han enviado tus datos");
        }
    }
});

