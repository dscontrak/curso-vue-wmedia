<template>
    <section>
        <h1>Rutas con Vue Router</h1>
        
        <button @click="cambiar" class="button is-link">Cambiar acceso</button>
        
        <div class="tabs is-centered">
          <ul>
            <router-link active-class="is-active" to="/" tag="li" exact><a>Home</a></router-link>
            <router-link active-class="is-active" to="/equipo/test" tag="li"><a>Equipo</a></router-link>
          </ul>
        </div>  
        <!-- <hr> -->
        <router-view></router-view>
    </section>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        methods: mapMutations(['cambiar'])
    }
</script>
