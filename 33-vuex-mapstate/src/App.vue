<template>
  <div>
    <h1 class="is-size-3">Map State de  <code>Vuex</code></h1>
    Hola mundo me llamo {{nombre}} {{apellidos}} y de la ciudad: {{ciudad}}
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  /*computed: {
    nombre(){
      return this.$store.state.nombre;
    }
  }*/
  /*computed: mapState({
    nombre: (state) => state.nombre,
    apellidos: (state) => state.apellidos
  })*/
  computed: mapState(['nombre', 'apellidos', 'ciudad'])
}
</script>

<style>
</style>
