<template>
    <div>
        <h1 class="is-size-3 has-text-danger" >Area de datos privada</h1>
        <p>Obteniendo datos de forma dique remota</p>
        <pre v-text="numero"></pre>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                numero: null
            }
        },
        beforeRouteEnter(to, from, next){
            console.info("Antes de entrar");
            setTimeout(() => {
                // aqui el this se convierte en vm.
                next((vm) => {
                    vm.numero = Math.floor(Math.random() * 1000);    
                });
                
            },2000);
            
        },
        methods:{
            
        }
    }
</script>