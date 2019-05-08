// Initialize Firebase
var config = {
apiKey: "AIzaSyA5LntlBa1ColcieGkx9DfjrGaNw72BBY4",
authDomain: "vue-wmedia-curso.firebaseapp.com",
projectId: "vue-wmedia-curso",
/*databaseURL: "https://vue-wmedia-curso.firebaseio.com",
storageBucket: "vue-wmedia-curso.appspot.com",
messagingSenderId: "652651855856"*/
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

console.log(db);  // "[DEFAULT]"

// You can retrieve services via the defaultApp variable...
db.collection("users").add({
    first: "Daniel",
    last:  "Serna",
    born:   1984
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
    
new Vue({
    el: '#app',
    data: {
       mensaje: "Ya se ha enviado los datos correspondientes"
    },
    methods: {

    }
});

