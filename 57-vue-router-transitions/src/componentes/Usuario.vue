<template>
    <h2>{{ id }}</h2>
</template>
<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to) {
                this.id = to.params.id;
            }
        },
        beforeRouteEnter: ((to, from, next) => {
            console.info("Antes de entrar");
            //next((vm) => console.log(vm));
            next();
        }),
        beforeRouteUpdate: ((to, from, next) => {
            console.info("Antes pequeñas diferencias");
            //console.info(this);
            
            next();
        }),
        beforeRouteLeave: ((to, from, next) => {
            console.info("Antes de SALIR");
            
            next();
        }),
    }
</script>