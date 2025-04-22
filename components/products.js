
async function loadProducts() {
    try {
        const response = await fetch('components/products.json');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error('Błąd ładowania produktów:', error);
    }
}

function getLanguage() {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'pl';
  }

function renderProducts(products) {
    const language = getLanguage();
    const container = document.getElementById("products");
    const template = document.getElementById("product-template");

    container.innerHTML = "";

    products.forEach(product => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".title").textContent = product.title[language];

        const gallery = clone.querySelector(".product-gallery");
        product.images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            gallery.appendChild(img);
        });

        clone.querySelector(".size").innerHTML = `
            ${product.size[language]}<br>
        `;

        clone.querySelector(".description").innerHTML = `
            ${product.description[language]}<br><br>
            ${product.price[language]}
        `;

        container.appendChild(clone);
    });
}

loadProducts();