<template>
    <div>
        <h2>Home</h2>
        <p>Nada test</p>
        <button @click="cambiar" class="button is-link">Cambiar acceso a Contacto / Privado</button>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex';
    export default {
        methods: mapMutations(['cambiar'])
    }
</script>