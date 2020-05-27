document.addEventListener('DOMContentLoaded', function () {
    $(function () {
        let index = 0;
        let nyFoto;
        let fotoListe = ["amplifier", "harbeth", "Pro_ject"];

        let textListe = ["PRIMULUNA SOUNDS", "HARBETH SPEAKERS", "PROJECT TURNTABLE"];

        $("#next").click(function () {
            if (index < fotoListe.length - 1) {
                index++;
            } else {
                index = 0;
            }
            skift();
            nyFoto = "./assets/img/slider/" + fotoListe[index] + ".jpg";
            document.querySelector(".frontpage-slider__big-img").setAttribute("src", nyFoto);
            document.querySelector(".frontpage-slider__text-name").textContent = textListe[index];
        });

        $("#back").click(function () {
            if (index > 0) {
                index--;
            } else {
                index = fotoListe.length - 1;
            }
            skift();
            nyFoto = "./assets/img/slider/" + fotoListe[index] + ".jpg";
            document.querySelector(".frontpage-slider__big-img").setAttribute("src", nyFoto);
            document.querySelector(".frontpage-slider__text-name").textContent = textListe[index];
        });

        function skift() {
            $("#frontpage-slider__big-img").attr("src", "./assets/img/slider/" + fotoListe[index] + ".jpg");

        }

    });

});
