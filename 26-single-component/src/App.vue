<template>
    <div>
      <h1 class="is-size-1">Personas con Vue</h1>
      <persona></persona>
      <persona></persona>
      <persona></persona>
    </div>
</template>

<script>
import persona from './componentes/Persona.vue';
export default {
  components: { persona },
  data () {
    return {}
  }
}
</script>

<style>

</style>
