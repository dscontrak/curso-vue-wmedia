const productos = [
    {nombre: 'Steam Link', precio: 50},
    {nombre: 'Steam Controller', precio: 59},
    {nombre: 'Axiom Verge', precio: 17},
];

const mutaciones = {
    anadirProducto: (state, producto) => {
        //console.log(productos);
        //console.log(state);
        //console.log(producto);
        //state.productos.unshift(producto);
        state.unshift(producto);
    },
};

export default {
    state: productos,
    mutations: mutaciones,
};

