<template>
    <div>
        <h1>Scoped CSS ejemplo</h1>
        <input type="range">
        <ul>
            <li><a href="">Enlace 1</a></li>
            <li><a href="">Enlace 2</a></li>
            <li><a href="">Enlace 3</a></li>
            <li><a href="">Enlace 4</a></li>
            <li><a href="">Enlace 5</a></li>
            <li><a href="">Enlace 6</a></li>
        </ul>
        <tareas></tareas>
        
        <h1>Module CSS ejemplo</h1>
        <p>Para utilizarlos como varibales propias, utilizando la variable <code>$style</code> propia de Vue</p>
        <!-- <h4 :class="[$style.rojo]">Texto con module</h4> -->
        <h4 :class="{[$style.subrayado]: subrayado}">Texto con module</h4>
        
    </div>
</template>

<script>
    import tareas from './componentes/Tareas.vue';
    export default {
        components: {tareas},
        data(){
          return {
            subrayado: false
          }
        }
    }
</script>
<style module>
  .subrayado{
    text-decoration:underline;
  }
  
  .rojo{
    color:red;
  }
</style>
