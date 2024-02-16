document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "Sneakers", description: "Comfortable sneakers for everyday wear.", price: "$49.99", image: "https://via.placeholder.com/300x200" },
        { name: "Running Shoes", description: "High-performance running shoes for athletes.", price: "$79.99", image: "https://via.placeholder.com/300x200" },
        { name: "Boots", description: "Stylish boots suitable for any occasion.", price: "$89.99", image: "https://via.placeholder.com/300x200" },
        // Add more products as needed
    ];

    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDescription.style.display = 'none';

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        cardContent.appendChild(productName);
        cardContent.appendChild(productDescription);
        cardContent.appendChild(productPrice);

        card.appendChild(image);
        card.appendChild(cardContent);

        card.addEventListener('click', function() {
            if (productDescription.style.display === 'none') {
                productDescription.style.display = 'block';
            } else {
                productDescription.style.display = 'none';
            }
        });

        productContainer.appendChild(card);
    });
});
