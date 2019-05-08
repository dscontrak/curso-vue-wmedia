<template>
    <div>
        <h2 class="is-size-2">Home</h2>
        <!--<router-link :to="'/equipo/' + id">Equipo</router-link> -->
        <router-link :to="{name: 'equipo', params:{id:id}}">Equipo</router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                id: 'daniel'
            }
        }
    }
</script>