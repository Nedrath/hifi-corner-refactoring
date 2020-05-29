document.addEventListener('DOMContentLoaded', function () {

    let searchParams = new URLSearchParams(document.location.search);
    let sku = (searchParams.get("id"));

    fetch(`https://hifi-corner.herokuapp.com/api/v1/products/${sku}`, {
        "method": "GET"
    })
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(data => {

            // PRODUKT BILLEDE SECTION
            let billedeSection = document.querySelector(".produkt-billede")
            billedeSection.setAttribute("data-id", data.sku)
            billedeSection.id = 'p' + data.sku

            billedeSection.innerHTML = `
                <img src="${data.images}" alt="">
                
                `;

            // PRODUKT INFO SECTION
            let produktOverskrift = document.querySelector(".produkt-info__overskrift")
            produktOverskrift.setAttribute("data-id", data.sku)
            produktOverskrift.id = 'p' + data.sku
            produktOverskrift.innerHTML = `${data.make}  ${data.model}`;

            let productBrand = document.querySelector(".otherProducts__brand")
            productBrand.setAttribute("data-id", data.sku)
            productBrand.id = 'p' + data.sku
            productBrand.innerHTML = `${data.make} `;

            let productlPrice = document.querySelector(".otherProducts__price")
            productlPrice.setAttribute("data-id", data.sku)
            productlPrice.id = 'p' + data.sku
            productlPrice.innerHTML = `${data.price} kr`;

            let productText = document.querySelector(".produkt-info__produktTekst")
            productText.setAttribute("data-id", data.sku)
            productText.id = 'p' + data.sku
            productText.innerHTML = `${data.description}`;

        });
});