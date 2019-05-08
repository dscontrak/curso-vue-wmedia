new Vue({
    el: 'main',
    data: {
        albums : []
    },
    mounted(){
        console.log("Instancia montada");
        this.cargarAlbums();
    },
    methods:{
        cargarAlbums(){
            
            /*  // CON RESOURCE
            //this.$http.get('https://randomuser.me/api/?results=500')
            this.$http.get('https://jsonplaceholder.typicode.com/photos')
                .then((respuesta) => {
                    //this.albums = respuesta.body;
                    //console.log(respuesta);
                    
                    for (var i = 0; i < 100; i++) {
                       this.albums.push( respuesta.body[i] );
                    }
                    
                });*/
                
            // CON AXIOS
            axios.get('https://jsonplaceholder.typicode.com/photos')
                .then((respuesta) => {
                    for (var i = 0; i < 50; i++) {
                       this.albums.push( respuesta.data[i] );
                    }
                    
                });
        }
    }
});