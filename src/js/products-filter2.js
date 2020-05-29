document.addEventListener('DOMContentLoaded', function () {

    // window.history.pushState({},"",event.target.href);

    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {

            
           
        })

})















