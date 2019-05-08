<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>Daniel Serna</h2>
        <h5>ds@gmail.com</h5>
        <div class="buttons has-addons">
            <!-- <router-link class="button" active-class="is-info" tag="span" :to="'/equipo/' + $route.params.id + '/fotos'">Fotos</router-link>
            <router-link class="button" active-class="is-info" tag="span" :to="'/equipo/' + $route.params.id + '/bio'">Bio</router-link> -->
            
            <router-link class="button" active-class="is-info" tag="span" :to="{name: 'fotos', params: {id:$route.params.id}}">Fotos</router-link>
            <router-link class="button" active-class="is-info" tag="span" :to="{name: 'bio', params: {id:$route.params.id}}">Bio</router-link>
            
            
        </div>
        <router-view></router-view>
    </section>
</template>