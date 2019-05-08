<template>
    <div>
        <h2>Contacto</h2>
        <button class="button is-link"  @click="irHome()">Ir al Home</button>
    </div>
</template>
<script>
    export default {
        created() {
            setTimeout(() => this.$router.push('/'), 2000);
        },
        methods: {
            irHome() {
                this.$router.push('/', ()=> console.log('Ruta cambiada')); // Home
            }
        }
    }
</script>