document.addEventListener('DOMContentLoaded', function () {
    let amplifier = document.getElementById('amp');
    let speakers = document.getElementById('speak');
    let turntables = document.getElementById('turn');
    let cd_players = document.getElementById('cd');

    let creek = document.getElementById('creek')
    let boesendorfer = document.getElementById('boesendorfer')
    let epos = document.getElementById('epos')
    let exposure = document.getElementById('exposure')
    let harbeth = document.getElementById('harbeth')
    let jolida = document.getElementById('jolida')
    let manley = document.getElementById('manley')
    let parasound = document.getElementById('parasound')
    let proJect = document.getElementById('proJect')


    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => {

            //henter alle amplifiers
            amplifier.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.category.includes('Amplifiers')

                })
                console.log(results)
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }

            });
            //henter alle speakers
            speakers.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.category.includes('Speakers')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            });

            //henter alle LP Players / Turntables
            turntables.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.category.includes('LP Players')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            });

            //henter alle cd players
            cd_players.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.category.includes('CD Players')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })

            //SORTERING AF PRODUCENT

            //Sorter Creek
            creek.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.make.includes('Creek')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })
            //Sorter Boesendorfer
            boesendorfer.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.make.includes('Boesendorfer')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })
            //Sorter Epos
            epos.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.make.includes('Epos')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })
            //Sorter Exposure
            exposure.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.make.includes('Exposure')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })
            //Sorter Harbeth
            harbeth.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.make.includes('Harbeth')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })
            //Sorter Jolida
            jolida.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.make.includes('Jolida')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })
            //Sorter Manley
            manley.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.make.includes('Manley')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })
            //Sorter Parasound
            parasound.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.make.includes('Parasound')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })
            //Sorter Pro-Ject
            proJect.addEventListener('click', function (event) {
                event.preventDefault();
                window.history.pushState({},"",event.target.href);
                let results = data.filter(products => {
                    return products.make.includes('Pro-Ject')
                })
                if (results) {
                    let allelm = document.querySelectorAll('.thumbnail-box')
                    allelm.forEach(element => {
                        element.style.display = 'none'
                    });
                    results.forEach(element => {
                        let selected = document.getElementById('p' + element.sku)
                        selected.style.display = 'block'
                    });
                }
            })
        })

})















