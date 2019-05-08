Vue.component('mis-usuarios',{
    props: ['datos'],
    template: "#plantilla-usuario",
    data() {
        return {
            usuarios: this.datos
        }
    }
});

/*template: `<div> 
            <ul>
                <li v-for="u in usuarios">{{u.name}}</li>
            <ul> 
        </div>`
    }*/
new Vue({
    el: "main",
    mounted(){
      console.log("Ha sido montado");  
      axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
          this.datapadre = response.data;
      });
    },
    data: {
        datapadre: []
    }
});