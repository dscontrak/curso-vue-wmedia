<template>
    <div>
        <h2>Contacto</h2>
        <button class="button is-link"  @click="irHome()">Ir al Home</button>
    </div>
</template>
<script>
    export default {
        methods: {
            irHome() {
                this.$router.push('/', ()=> console.log('Ruta cambiada')); // Home
            }
        }
    }
</script>