<template>
    <section>
        <h1>Rutas con Vue Router</h1>
        <div class="tabs is-centered">
          <ul>
            <router-link active-class="activo" to="/" tag="li" exact><a>Home</a></router-link>
            <router-link active-class="activo" to="/contacto" tag="li"><a>Contacto</a></router-link>
            <router-link active-class="activo" to="/usuario/77" tag="li"><a>Usuario 77</a></router-link>
            <router-link active-class="activo" to="/usuario/88" tag="li"><a>Usuario 88</a></router-link>
          </ul>
        </div>  
        <!-- <hr> -->
        <router-view></router-view>
    </section>
</template>

<script>
    export default {
    }
</script>
<style>
    /*.router-link-active{
        color: blue;
        font-weight: bold;
    }*/
    .activo{
        font-weight: bold;
    }
</style>