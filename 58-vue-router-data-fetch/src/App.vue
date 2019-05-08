<template>
    <section>
        <h1 class="is-size-2">Rutas con Vue Router</h1>
        <div class="tabs is-centered">
          <ul>
            <router-link active-class="activo" to="/" tag="li" exact><a>Home</a></router-link>
            <router-link active-class="activo" to="/contacto" tag="li"><a>Contacto</a></router-link>
            <router-link active-class="activo" to="/usuario/77" tag="li"><a>Usuario 77</a></router-link>
            <router-link active-class="activo" to="/usuario/88" tag="li"><a>Usuario 88</a></router-link>
            <router-link active-class="activo" to="/privado/pedro" tag="li"><a>Dato Privado (Despues) </a></router-link>
            <router-link active-class="activo" to="/privadoantes/pedro" tag="li"><a>Dato Privado (Antes) </a></router-link>
          </ul>
        </div>  
        <!-- <hr> -->
        <transition name="aparecer" appear>
            <router-view></router-view>
        </transition>
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
    
    .aparecer-enter{
        opacity: 0;
    }
    
    /* Cuando entra en tiempo */
    .aparecer-enter-active{
        transition: opacity 1s;
    }
    
    .aparecer-leave-to{
        opacity: 0;
    }
    
    /* Cuando sale en tiempo */
    .aparecer-leave-active{
        transition: opacity 1s;
    }
    
</style>