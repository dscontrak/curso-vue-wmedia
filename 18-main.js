Vue.component('xusuario',{
    props:['listado'], 
    template: '#plantilla-usuario'
});

new Vue({
    el: "main",
    mounted(){
        console.log(this.usuarios);
        /*console.log("Ha sido montado");  
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        this.usuarios = response.data;
        });*/
      
    },
    data: {
        usuarios: [
            {nombre: 'Daniel', email: 'email@daniel.com'},
            {nombre: 'Pedro',  email: 'pedro@daniel.com'},
            {nombre: 'Juan',   email: 'juan@daniel.com'},
            
        ]
    }
});