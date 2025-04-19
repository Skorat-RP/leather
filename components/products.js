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
    const template = document.getElementById("product-template");

    container.innerHTML = "";

    products.forEach(product => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".title").textContent = product.title.pl;

        const gallery = clone.querySelector(".product-gallery");
        product.images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            gallery.appendChild(img);
        });

        clone.querySelector(".size").innerHTML = `
            ${product.size.pl}<br>
        `;

        clone.querySelector(".description").innerHTML = `
            ${product.description.pl}<br><br>
            Cena: ${product.price} szczurcoinów
        `;

        container.appendChild(clone);
    });
}

loadProducts();