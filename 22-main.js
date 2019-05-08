
Vue.component('twitter-card',{
    template: `
<div class="card">
  <div class="card-content">
    <p class="title">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
    <p class="subtitle">
      Daniel Serna
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div>   
    `
});

Vue.component('contacto',{
    template: `
    <div>
<span class="icon">
  <i class="fas fa-home"></i>
</span> <span> 7887878787878 </span></div>`
});

Vue.component('botones',{
    template: `
    <div>
    <a class="button is-primary">Primary</a>
    <a class="button is-link">Link</a>
    <a class="button is-info">Info</a>
    <a class="button is-success">Success</a>
    <a class="button is-warning">Warning</a>
    <a class="button is-danger">Danger</a>
    </div>`
});

new Vue({
    el: 'main',
    data: {
        actualTab: 'contacto'
    }
});