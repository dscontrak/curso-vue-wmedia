<template>
    <div>
        <h2>Home</h2>
        <router-link :to="'/equipo/' + id">Equipo</router-link>
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