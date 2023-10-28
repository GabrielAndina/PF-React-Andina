export const products = [
    {
        name: 'Camiseta SUP',
        price: 13000,
        category: 'camisetas',
        img: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2634ce47/products/NI_CI0013-480/NI_CI0013-480-1.JPG',
        stock: 15,
        description: 'Camiseta match de Los Pumas SUPLENTE, ajustada al cuerpo y con elastico antideslizante en la cintura.'
    },
    {
        name: 'Short TIT',
        price: 8000,
        category: 'shorts',
        img: 'https://www.digitalsport.com.ar/files/products/5d8cdee35e6c5-476262-500x500.jpg',
        stock: 3,
        description: 'Short antideslizante de Los Pumas TITULAR, el mejor del mercado gracias a Nike.'
    },
    {
        name: 'Short SUP',
        price: 6000,
        category: 'shorts',
        img: 'https://www.digitalsport.com.ar/files/products/5d5d3e15bee67-476263-500x500.jpg',
        stock: 6,
        description: 'Short antideslizante de Los Pumas SUPLENTE, el mejor del mercado gracias a Nike.'
    },
    {
        name: 'Buzo ENT',
        price: 11500,
        category: 'otros',
        img: 'https://scontent.ftuc3-1.fna.fbcdn.net/v/t1.6435-9/172990863_267166084854965_4564260794666160675_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4GhZLPtBH4YAX_KAD-_&_nc_ht=scontent.ftuc3-1.fna&oh=00_AfB0kWomG-V4xL4dXRP3mVVOX-57s0bQDIl0Yoefxz8Iyw&oe=65426804',
        stock: 9,
        description: 'Buzo Rompeviento de Los Pumas ENTRENAMIENTO, ideal para entrenar en el frio y la lluvia. El mejor del mercado gracias a Nike.'
    },
    {
        name: 'Campera ENT',
        price: 12000,
        category: 'otros',
        img: 'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/C/D/CD0444-433_1.jpg',
        stock: 5,
        description: 'Campera liviana de Los Pumas ENTRENAMIENTO. La mejor del mercado gracias a Nike.'
    },
    {
        name: 'Remera ENT',
        price: 8000,
        category: 'otros',
        img: 'https://www.digitalsport.com.ar/files/products/5b7daafcc35b7-445604-1200x1200.jpg',
        stock: 14,
        description: 'Remera de ENTRENAMIENTO de Los Pumas, color azul.'
    },
    {
        name: 'Remera ENT',
        price: 7500,
        category: 'otros',
        img: 'https://barbarianrugbyshop.com/wp-content/uploads/2020/10/Los-Pumas-entrenamiento.png',
        stock: 5,
        description: 'Remera de ENTRENAMIENTO de Los Pumas, color celeste.'
    },
    {
        name: 'Pantalón ENT',
        price: 10000,
        category: 'otros',
        img: 'https://www.digitalsport.com.ar/files/products/5da766f66775e-476258-500x500.jpg',
        stock: 4,
        description: 'Pantalón de ENTRENAMIENTO de Los Pumas, color azul.'
    },
    {
        name: 'Musculosa ENT',
        price: 9700,
        category: 'otros',
        img: 'https://http2.mlstatic.com/D_NQ_NP_954667-MLA44527073681_012021-O.webp',
        stock: 9,
        description: 'Musculosa de Los Pumas ENTRENAMIENTO. La mejor del mercado gracias a Nike.'
    },
]
export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    const filteredProducts = products.filter((product) => product.category === category);
    return filteredProducts;
  };
