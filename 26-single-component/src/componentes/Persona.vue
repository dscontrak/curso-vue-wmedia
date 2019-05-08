<template>
    <div>
      <template v-if="persona">
          <strong> <span class="icon">  <i class="fas fa-user"></i></span>  Nombre: </strong> 
          {{personaData.user}}
          <strong> <span class="icon">  <i class="fas fa-home"></i></span> Email: </strong> 
          {{personaData.email}}
          <strong> <span class="icon">  <i class="fas fa-envelope"></i></span> Dirección: </strong> 
          {{personaData.direccion}}
      </template>  
      <span v-else> Cargando la persona</span>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
        persona: null
    }
  },
  mounted(){
        var indexPersona = Math.floor(Math.random() *  9);
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then((respuesta) => {
               
                 this.persona = respuesta.data[indexPersona];
             });
  },
  computed: {
      personaData(){
          return {
              nombre: this.persona.name,
              email: this.persona.email,
              direccion: `${this.persona.address.street}, ${this.persona.address.suite}, ${this.persona.address.city}`,
          }
      }
  }
  
  
}
</script>

<style>

</style>
