Vue.directive('destacar',{
    bind(el, binding, vnode){
        el.style.color = 'red'; // Cambiando el element
        el.style.fontSize = binding.value + "px ";
    }
})

new Vue({
    el: '#app',
    
});

