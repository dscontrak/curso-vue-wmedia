<template>
    <section>
        <h1 class="is-size-1">Cantidad: {{ cantidad }}</h1>
        <button @click="aumentar">Aumentar</button>
        <button @click="reducir">Reducir</button>
    </section>
</template>
<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        computed: mapState(['cantidad']), // Para mapear los datos directamente
        methods: mapMutations(['aumentar', 'reducir']), // Para mapear con los eventos directamente
        /*methods: {
            aumentar() {
                //this.$store.state.cantidad++; // Forma manual
                //this.$store.commit('aumentar'); // Usar mutation
            },
            reducir() {
                //this.$store.state.cantidad--; // Forma manual
                //this.$store.commit('reducir'); //Usar mutation
            }
        }*/
    }
</script>