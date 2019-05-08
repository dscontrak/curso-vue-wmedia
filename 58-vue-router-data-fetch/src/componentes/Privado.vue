<template>
    <div>
        <h1 class="is-size-3 has-text-danger" >Area de datos privada</h1>
        <p>Obteniendo datos de forma dique remota</p>
        <pre v-text="nombre"></pre>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                nombre: null
            }
        },
        created(){
            this.obtenerNombre();
        },
        watch: {
          '$route': 'obtenerNombre'  
        },
        methods:{
            obtenerNombre(){
                setTimeout(() => {
                    this.nombre = this.$route.params.id + Math.floor(Math.random() * 1000);    
                },2000)
                
            }
        }
    }
</script>