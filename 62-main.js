Vue.directive('fijar',{
    bind(el, binding){
        console.log(el, binding);
        
        el.style.position = "fixed";
        
        if(binding.value && binding.value.background){
            el.style.backgroundColor = binding.value.background;
        }
        
        if(binding.value && binding.value.top){
            el.style.top = binding.value.top + "px";    
        }
        
    }
})

new Vue({
    el: '#app',
    
});

