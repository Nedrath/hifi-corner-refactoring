document.addEventListener('DOMContentLoaded', function () {
    let search = document.getElementById('search-input')
    let searchclick = document.querySelector('.fa-search')

    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            searchclick.addEventListener("click", function (event) {

                let results = data.filter(products => {
                    return products.make.toLowerCase().includes(search.value.toLowerCase())
                });

                if (results) {

                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'

                    });

                    window.setInterval(function () {
                        if (search.value == '') {
                            allelm.forEach(elm => {
                                elm.style.display = 'block'
                            })
                        }

                    }, 500)

                }

            });
        });


});