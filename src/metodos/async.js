export async function getProducto(id) {
    const response= await fetch(`https://fakestoreapi.com/products/${id}`)
    const producto=await response.json(); 
    return producto; 
    
}

export async function getProductos() {
    const response=await  fetch('https://fakestoreapi.com/products')
    const data=await response.json(); 
    return data; 
}

export async function getCategorias() {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const categorias = await response.json();
    return categorias;
}

export async function getProductosPorCategoria(categoria) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${categoria}`)
    const productos = await response.json();
    return productos;
}
