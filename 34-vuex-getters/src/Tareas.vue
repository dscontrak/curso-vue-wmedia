<template>
    <main>
      <h1 class="is-size-2">Tareas</h1>
        <tareas-restantes></tareas-restantes>
        <ol>
            <li v-for="tarea in tareas">{{ tarea.nombre }}</li>
        </ol>
    </main>
</template>

<script>
    import {mapState} from 'vuex';
    import TareasRestantes from './componentes/TareasRestantes.vue';
    export default {
        computed: {
            tareas() {
                return this.$store.state.tareas;
            }
        },
        components: {TareasRestantes},
    }
</script>