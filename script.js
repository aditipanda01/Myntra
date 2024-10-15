const products = [
    { id: 1, name: 'Red Frock', category: 'frocks', gender: 'women', price: 12000, material: 'cotton', color: 'red', size: 'M', preowned: 'no', image: 'red_frock.webp' },
    { id: 2, name: 'Blue Trousers', category: 'trousers', gender: 'men', price: 1500, material: 'cotton', color: 'blue', size: 'L', preowned: 'yes', image: 'blue_trousers.avif' },
    { id: 3, name: 'Hair accesories Set', category: 'Accesories', gender: 'women', price: 180, material: 'Crystal,Pearl,Metal', color: 'White', size: 'pack of 1', preowned: '8 months', image: 'Pearl hair piece.jpeg' },
    { id: 4, name: 'Yellow Skirt', category: 'skirts', gender: 'women', price: 1000, material: 'silk', color: 'yellow', size: 'M', preowned: 'yes', image: 'yellow_skirt.jpg' },
    { id: 5, name: 'Poze Quartz Analog', category: 'Wrist watch', gender: 'Women', price: 1000, material: 'stainless steel', color: 'Pink',Display_Type:'analog',size:'5mm diameter', preowned: '3 months', image: 'pinkwatch.jpeg' },
    { id: 6, name: 'Off white Handheld Bag', category: 'handbag', gender: 'women', price: 599, material: 'synthetic leather', color: 'white', size: 'height:20cm,Width:29cm', preowned: '7 months', image: 'whitehandbag.jpeg' },
    { id: 7, name: 'Grey Jacket', category: 'jackets', gender: 'men', price: 3000, material: 'cotton', color: 'grey', size: 'M', preowned: 'yes', image: 'greyjacket.jpeg' },
    { id: 8, name: 'Textured Sneakers', category: 'shoes', gender: 'women', price: 900, material: 'Mesh', color: 'White&Black', size: '7', preowned: '2months', image: 'snekers.jpeg' },
];

const businessItems = [
    { id: 1, name: 'Women Handbag', price: 2000, image: 'handbag.jpeg' },
    { id: 2, name: 'Wrist Watch', price: 899, image: 'wristwatch.jpeg' },
    { id: 3, name: 'Casual Shoes', price: 1500, image: 'shoes.jpeg' },
    { id: 4, name: 'Blazer', price: 3500, image: 'blazer.jpeg' },
    { id: 5, name: 'Sweat pant ', price: 1000, image: 'sweatpants.jpeg' },
];

document.getElementById('itemSearch').addEventListener('input', filterProducts);
document.getElementById('gender').addEventListener('change', filterProducts);
document.getElementById('priceRange').addEventListener('input', filterProducts);
document.getElementById('dressType').addEventListener('change', filterProducts);
document.getElementById('material').addEventListener('change', filterProducts);
document.getElementById('color').addEventListener('change', filterProducts);
document.getElementById('size').addEventListener('change', filterProducts);
document.getElementById('preowned').addEventListener('change', filterProducts);

function filterProducts() {
    const search = document.getElementById('itemSearch').value.toLowerCase();
    const gender = document.getElementById('gender').value;
    const price = document.getElementById('priceRange').value;
    const dressType = document.getElementById('dressType').value;
    const material = document.getElementById('material').value;
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const preowned = document.getElementById('preowned').value;

    const filteredProducts = products.filter(product => {
        return (product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search)) &&
               (gender === 'all' || product.gender === gender) &&
               product.price <= price &&
               (dressType === 'all' || product.category === dressType) &&
               (material === 'all' || product.material === material) &&
               (color === 'all' || product.color === color) &&
               (size === 'all' || product.size === size) &&
               (preowned === 'all' || product.preowned === preowned);
    });

    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="description">
                <h2>${product.name}</h2>
                <p>Category: ${product.category}</p>
                <p>Material: ${product.material}</p>
                <p>Color: ${product.color}</p>
                <p>Size: ${product.size}</p>
                <p>Pre-owned: ${product.preowned}</p>
            </div>
            <div class="price">₹${product.price}</div>
        `;
        productList.appendChild(productDiv);
    });
}

function displayBusinessItems(items) {
    const businessList = document.getElementById('businessList');
    businessList.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('business-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="name">${item.name}</div>
            <div class="price">₹${item.price}</div>
        `;
        businessList.appendChild(itemDiv);
    });
}

// Initial display
displayProducts(products);
displayBusinessItems(businessItems);
