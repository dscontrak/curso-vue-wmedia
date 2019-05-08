<template>
    <section>
        <h1 class="is-size-1">Rutas con Vue Router</h1>
        <!--<div class="tabs is-centered">
          <ul>
            <router-link active-class="is-active" to="/" tag="li" exact><a>Home</a></router-link>
            <router-link active-class="is-active" to="/equipo/test" tag="li" ><a>Equipo</a></router-link>
          </ul>
        </div>   -->
        <!-- <hr> -->
        <router-view></router-view>
    </section>
</template>

<script>
    export default {
    }
</script>
