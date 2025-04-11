async function loadProducts() {
    try {
        const response = await fetch('components/products.json');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error('Błąd ładowania produktów:', error);
    }
}

function renderProducts(products) {
    const container = document.getElementById("products");
    container.innerHTML = products.map(product => `
        <div class="product">
            <h2>${product.title}</h2>
            <div class="product-gallery">
                ${product.images.map(src => `<img src="${src}" />`).join("")}
            </div>
            <p class="description">
                ${product.description}<br>
                Cena: ${product.price} szczurcoinów
            </p>
        </div>
    `).join("");
}

loadProducts();