const products = [
    { id: 1, name: 'Red Frock', category: 'frocks', gender: 'women', price: 12000, material: 'cotton', color: 'red', size: 'M', preowned: 'no', image: 'red_frock.webp' },
    { id: 2, name: 'Blue Trousers', category: 'trousers', gender: 'men', price: 1500, material: 'cotton', color: 'blue', size: 'L', preowned: 'yes', image: 'blue_trousers.avif' },
    { id: 3, name: 'Green T-shirt', category: 'tshirts', gender: 'men', price: 800, material: 'cotton', color: 'green', size: 'S', preowned: 'no', image: 'green_tshirt.jpg' },
    { id: 4, name: 'Yellow Skirt', category: 'skirts', gender: 'women', price: 1000, material: 'silk', color: 'yellow', size: 'M', preowned: 'yes', image: 'yellow_skirt.jpg' },
    { id: 5, name: 'Black Jeans', category: 'jeans', gender: 'men', price: 2000, material: 'cotton', color: 'black', size: 'L', preowned: 'no', image: 'black_jeans.jpg' },
    { id: 6, name: 'White Dress', category: 'dresses', gender: 'women', price: 2500, material: 'silk', color: 'white', size: 'S', preowned: 'no', image: 'white_dress.jpg' },
    { id: 7, name: 'Grey Jacket', category: 'jackets', gender: 'men', price: 3000, material: 'cotton', color: 'grey', size: 'M', preowned: 'yes', image: 'grey_jacket.jpg' },
    { id: 8, name: 'Pink Top', category: 'tops', gender: 'women', price: 900, material: 'silk', color: 'pink', size: 'L', preowned: 'no', image: 'pink_top.jpg' },
    { id: 9, name: 'Orange Shirt', category: 'shirts', gender: 'men', price: 1800, material: 'cotton', color: 'orange', size: 'M', preowned: 'yes', image: 'orange_shirt.jpg' },
  ];
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
  displayProducts(products);
  // Track likes for designers
  var designerLikes = {
    'John Doe': 0,
    'Jane Smith': 0,
    'Emily Brown': 0
  };
  
  // Function to update Designer of the Week
  function updateDesignerOfWeek(designerName, likes) {
    if (likes >= 10000) { 
        var designerOfWeek = document.getElementById('designerOfWeek');
        designerOfWeek.innerHTML = `<p>Congratulations to ${designerName} for being the Designer of the Week!</p>`;
    }
  }
  
  
  document.getElementById('designForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
   
    var style = document.getElementById('style').value;
    var material = document.getElementById('material').value;
    var sustainability = document.getElementById('sustainability').value;
  
    
    var designerName = 'John Doe'; 
    designerLikes[designerName] += 1;
  
  
    updateDesignerOfWeek(designerName, designerLikes[designerName]);
  
    // Generate output message
    var output = `
        <p>Designing outfit with:</p>
        <ul>
            <li>Style: ${style}</li>
            <li>Material: ${material}</li>
            <li>Sustainability Option: ${sustainability}</li>
        </ul>
        <p>Total likes for ${designerName}: ${designerLikes[designerName]}</p>
    `;
  
    // Display output
    document.getElementById('output').innerHTML = output;
  });
  