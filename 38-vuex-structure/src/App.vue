
<template>
    <section>
        <productos></productos>
        <carro></carro>
    </section>
</template>
<script>
    import Productos from './componentes/Productos.vue';
    import Carro from './componentes/Carro.vue';
    export default {
        components: {Productos, Carro}
    }
</script>