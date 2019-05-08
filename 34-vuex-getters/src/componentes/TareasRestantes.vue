<template>
    <span><code>{{tareasCompletadas}} </code> <strong>tareas completadas</strong></span>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default {
        /*computed: {
            tareasCompletadas() {
                return this.$store.state.tareas.filter((tarea) => {
                    return tarea.completado;
                }).length;// De forma manual
                return this.$store.getters.tareasCompletadas; // Por medio de getters
            }
        }*/ 
        computed: mapGetters(['tareasCompletadas'])
    }
</script>


