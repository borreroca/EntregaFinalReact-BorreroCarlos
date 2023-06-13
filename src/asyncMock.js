const products = [
    {
        "id":"1",
        "name": "Televisor SAMSUNG 50 pulgadas 4k",
        // "src": "img/1.jpg",
        "category": "Televisor",
        "marca":"SAMSUNG",
        "price": 386,
        "stock":25,
        "description": "Descripción Televisor Samsung 50 pulgadas"
    },
    {
        "id":"2",
        "name": "Portatil ASUS i5-12500H",
        // "src": "img/2.jpg",
        "category": "Portatil",
        "marca":"ASUS",
        "price": 707,
        "stock":25,
        "description": "Descripción Portatil ASUS i5-12500H"
    },
    {
        "id":"3",
        "name": "Celular Xiaomi Redmi Note 11",
        // "src": "img/3.jpg",
        "category": "Celular",
        "marca":"Xiaomi",
        "price": 160,
        "stock":25,
        "description": "Descripción Portatil Celular Xiaomi Redmi Note 11"
    }
]

export const getProducts = () => {
    return new Promise  ((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}