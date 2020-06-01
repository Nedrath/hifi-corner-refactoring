document.addEventListener('DOMContentLoaded', function () {
    let price1 = document.getElementById('price-1');
    let price2 = document.getElementById("price-2");


    fetch("https://hifi-corner.herokuapp.com/api/v1/products?minPrice=500&maxPrice=1999", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            price1.addEventListener("click", function (event) {
                event.preventDefault();
                let results = data.filter(produkt => {
                    // console.log(produkt);
                    return +produkt.price <= 1999;

                });

                if (results) {

                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none';
                        element.setAttribute("hidden", true);
                    });
                    results.forEach(element => {
                        // console.log(element.id)
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block';


                    });
                }
                // price1.sort((a, b) => (a.price > b.price ? 1 : -1));
            });

        });

    fetch("https://hifi-corner.herokuapp.com/api/v1/products?minPrice=2000&maxPrice=4500", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            price2.addEventListener("click", function (event) {
                event.preventDefault();
                let results = data.filter(produkt => {
                    return +produkt.price >= 2000 && +produkt.price <= 4500
                });

                if (results) {

                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none';
                        element.setAttribute("hidden", true);
                    });
                    results.forEach(element => {
                        // console.log(element.id)
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block';


                    });
                }

            });




        });

});