Vue.component('mis-publicaciones', {
    template: `<div><ul> <li v-for="p in publicaciones">{{p.title}}</li></ul> <pre>{{$data}}</pre></div>`,
    mounted(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((respuesta) => {
                this.publicaciones = respuesta.data;
        });
    },
    data(){
        return {
            publicaciones: []
        };
    }
});

new Vue({
    el: 'main',
});