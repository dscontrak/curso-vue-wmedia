<template>
    <div>
        <h2 class="is-size-2">Equipo</h2>
        <router-link to="/prueba">Pruebas</router-link>
        <router-link to="/otraprueba">Otra Prueba</router-link>
        
        
        <router-view></router-view>
        <router-view name="bio"></router-view>
        <router-view name="fotos"></router-view>
    </div>
</template>