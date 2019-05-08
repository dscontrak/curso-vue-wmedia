<template>
  <div>
    <h1>Elementos con render function</h1>
    <p>Para crear etiquetas de forma dinámica utilizamos lo siguiente</p> 
    <elemento tipo="header">Etiqueta <code>header</code> para pasar y crear este texto</elemento>
    <elemento tipo="main">Etiqueta <code>main</code> para pasar y crear este texto</elemento>
    <elemento tipo="footer">Etiqueta <code>footer</code> para pasar y crear este texto</elemento>
  </div>
</template>

<script>
import elemento from './componentes/Elemento.vue';

export default {
  components: {elemento}
}
</script>

<style>

</style>
