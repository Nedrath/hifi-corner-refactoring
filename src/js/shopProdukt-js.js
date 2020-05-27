document.addEventListener('DOMContentLoaded', function () {

    let searchParams = new URLSearchParams(document.location.search);
    let sku = (searchParams.get("id"));

    fetch(`https://hifi-corner.herokuapp.com/api/v1/products/${sku}`, {
        "method": "GET"
    })
        .then(response => {
            console.log(response);
            return response.json()
        } )
        .then(data => {



            // PRODUKT BILLEDE SECTION
            let billedeSection = document.querySelector(".produkt-billede")
            billedeSection.setAttribute("data-id", data.sku)
            billedeSection.id = 'p' + data.sku

            billedeSection.innerHTML = `
                <img src="${data.images}" alt="">
                
                `;

            // THUMBNAIL SECTION
            // let thumbnailSection = document.querySelector(".produkt__thumbnail")
            // thumbnailSection.setAttribute("data-id", data.sku)
            // thumbnailSection.id = 'p' + data.sku

            // if (data.more_views.length) {

            //     data.more_views.forEach(element => {

            //         thumbnailSection.innerHTML += `
            //         <img class="produkt-thumbnail__small-pictures" src="/images/Produktbilleder/${element}" alt="">
            //         `
            //     });
            // }

            // DESCRIPTION SECTION
            // let powerSection = document.querySelector(".specifikation__power")
            // powerSection.setAttribute("data-id", data.id)
            // powerSection.id = 'p' + data.id
            // powerSection.innerText = data.description["Power-Output"]

            // let frequencySection = document.querySelector(".specifikation__frequency")
            // frequencySection.setAttribute("data-id", data.id)
            // frequencySection.id = 'p' + data.id
            // frequencySection.innerText = data.description["Frequency-Response"]

            // let totalSection = document.querySelector(".specifikation__total")
            // totalSection.setAttribute("data-id", data.id)
            // totalSection.id = 'p' + data.id
            // totalSection.innerText = data.description["Total-Harmonic-Distortion"]

            // let dampingSection = document.querySelector(".specifikation__damping")
            // dampingSection.setAttribute("data-id", data.id)
            // dampingSection.id = 'p' + data.id
            // dampingSection.innerText = data.description["Damping-Factor"]

            // let inputMMSection = document.querySelector(".specifikation__inputMM")
            // inputMMSection.setAttribute("data-id", data.id)
            // inputMMSection.id = 'p' + data.id
            // inputMMSection.innerText = data.description["Input-Sensitivity:MM"]

            // let inputMCSection = document.querySelector(".specifikation__inputMC")
            // inputMCSection.setAttribute("data-id", data.id)
            // inputMCSection.id = 'p' + data.id
            // inputMCSection.innerText = data.description["Input-Sensitivity:MC"]

            // let signalSection = document.querySelector(".specifikation__signal")
            // signalSection.setAttribute("data-id", data.id)
            // signalSection.id = 'p' + data.id
            // signalSection.innerText = data.description["Signal-to-Noise-Ratio: MM / MC"]

            // let input1Section = document.querySelector(".specifikation__input1")
            // input1Section.setAttribute("data-id", data.id)
            // input1Section.id = 'p' + data.id
            // input1Section.innerText = data.description["Input-Sensitivity: High level"]

            // let inputBalancedSection = document.querySelector(".specifikation__inputBalanced")
            // inputBalancedSection.setAttribute("data-id", data.id)
            // inputBalancedSection.id = 'p' + data.id
            // inputBalancedSection.innerText = data.description["Input-Sensitivity: Balanced High Level"]

            // let signalHighSection = document.querySelector(".specifikation__signalHigh")
            // signalHighSection.setAttribute("data-id", data.id)
            // signalHighSection.id = 'p' + data.id
            // signalHighSection.innerText = data.description["Signal-to-Noise-Ratio: High level"]

            // let inputPowerSection = document.querySelector(".specifikation__inputPower")
            // inputPowerSection.setAttribute("data-id", data.id)
            // inputPowerSection.id = 'p' + data.id
            // inputPowerSection.innerText = data.description["Input-Sensitivity: Power Amp Direct IN"]

            // let signalPowerSection = document.querySelector(".specifikation__signalPower")
            // signalPowerSection.setAttribute("data-id", data.id)
            // signalPowerSection.id = 'p' + data.id
            // signalPowerSection.innerText = data.description["Signal-to-Noise-Ratio: Power Amp Direct IN"]

            // PRODUKT INFO SECTION
            let produktOverskrift = document.querySelector(".produkt-info__overskrift")
            produktOverskrift.setAttribute("data-id", data.sku)
            produktOverskrift.id = 'p' + data.sku
            produktOverskrift.innerHTML = `${data.make}  ${data.model}`;

            let productBrand = document.querySelector(".otherProducts__brand")
            productBrand.setAttribute("data-id", data.sku)
            productBrand.id = 'p' + data.sku
            productBrand.innerHTML = `${data.make} `;

            // let productDiscountPrice = document.querySelector(".info__otherProducts_discount")
            // productDiscountPrice.setAttribute("data-id", data.id)
            // productDiscountPrice.id = 'p' + data.id
            // productDiscountPrice.innerHTML = `${data["discount-price"]}`;

            // FEJL manglelr en if no discount price show normal price only

            let productlPrice = document.querySelector(".otherProducts__price")
            productlPrice.setAttribute("data-id", data.sku)
            productlPrice.id = 'p' + data.sku
            productlPrice.innerHTML = `${data.price} kr`;

            let productText = document.querySelector(".produkt-info__produktTekst")
            productText.setAttribute("data-id", data.sku)
            productText.id = 'p' + data.sku
            productText.innerHTML = `${data.description}`;

            // PRODUKT EKSTRA INFORMATION SECTION
            // let info__brand = document.querySelector(".info__brand")
            // info__brand.setAttribute("data-id", data.id)
            // info__brand.id = 'p' + data.id
            // info__brand.innerText = data.description["additional-information"].MANUFACTURER

            // let info__link = document.querySelector(".info__link")
            // info__link.setAttribute("data-id", data.id)
            // info__link.id = 'p' + data.id
            // info__link.innerText = data.description["additional-information"]["MANUFACTURER LINK"]

            // let info__warranty = document.querySelector(".info__warranty")
            // info__warranty.setAttribute("data-id", data.id)
            // info__warranty.id = 'p' + data.id
            // info__warranty.innerText = data.description["additional-information"]["FREE WARRIANTY"]

            // let info__charge = document.querySelector(".info__charge")
            // info__charge.setAttribute("data-id", data.id)
            // info__charge.id = 'p' + data.id
            // info__charge.innerText = data.description["additional-information"]["DELIVERY CHARGE"]

            // let info__time = document.querySelector(".info__time")
            // info__time.setAttribute("data-id", data.id)
            // info__time.id = 'p' + data.id
            // info__time.innerText = data.description["additional-information"]["DELIVERY TIME"]

            // let info__card = document.querySelector(".info__card")
            // info__card.setAttribute("data-id", data.id)
            // info__card.id = 'p' + data.id
            // info__card.innerText = data.description["additional-information"]["CARD SURCHARGES"]
        });
});