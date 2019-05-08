<template>
  <div id="app">
    <h1 class="is-size-2">Aprender en 2017-2018</h1>
        <form @submit.prevent="agregarTecnologia">
            
                   
            <div class="field">
              <div class="control">
                <input class="input" v-model="nuevaTecnologia"
                   type="text" placeholder="Tecnología a aprender">
              </div>
            </div>  
            
        </form>
        <h1 class="is-size-4">Lista:</h1>
        <ul>
          <li v-for="tecnologia in aprender">
                - {{ tecnologia.nombre }}
          </li>
        </ul>
  </div>
</template>

<script>
    import {mixin} from './mixins';
    export default {
        nombre: 'App.vue',
        created(){
          console.log("Created del componente");
        },
        mixins: [mixin],
        methods: {
          /*saludar(){
            alert("Saludo desde el componente");
          }*/
        }
    }
</script>

