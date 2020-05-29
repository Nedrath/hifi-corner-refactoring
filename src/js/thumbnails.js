document.addEventListener('DOMContentLoaded', function () {
    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            let thumbnail_grid = document.querySelector(".thumbnail-grid");

            data.forEach(products => {

                let div = document.createElement("div");
                div.className = "thumbnail-box";
                div.setAttribute("data-id", products.sku)
                div.id = 'p' + products.sku

                div.innerHTML = `
                    <img class="thumbnail-box__img" src="${products.images[0]}" alt="">
                    <h2 class="thumbnail-box__overskrift">${products.make} <br> ${products.model}</h2>
                    <p class="thumbnail-box__pris">${products.price} kr</p>
                    <a class="thumbnail-box__button" href="/shop-produkt?id=${products.sku}"> SHOW </a>
                    <button class="thumbnail-box__button thumbnail-box__button_udsolgt">udsolgt</button>`;
                thumbnail_grid.appendChild(div)


            });
        });
        
});

