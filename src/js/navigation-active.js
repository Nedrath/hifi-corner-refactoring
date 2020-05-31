document.addEventListener('DOMContentLoaded', function () {

    $(function() {
        $('nav a[href^="/' + location.pathname.split("")[1] + '"]').addClass('link__a_active');
      
        
      });

    
})


