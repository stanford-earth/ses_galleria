(function ($) {
    $(document).ready(function() {
        Galleria.loadTheme('https://earth.stanford.edu/sites/all/modules/ses_galleria/galleria/themes/classic/galleria.classic.min.js');
        $("#galleria").filter(":first").each(function(index) {
            Galleria.configure( {
                showInfo: true,
                height: 600,
                //width: 600,
                responsive: true,
                autoplay: 7000,
                clicknext: true,
            });
            $('.front').filter(":first").each(function(index) {
                Galleria.configure( {
                    width: 600,
                    height: 400,
                    responsive: true,
                    autoplay: 7000,
                    clicknext: true,
                    showInfo: true,
                });
            });
            $('.view-earth-news-image-or-video').hide();
	    $('.field-name-field-se-news-image').hide();
            Galleria.run('#galleria', {
                extend: function(options) {
                    if ($('body').is('.not-front')) {
                        Galleria.get(0).$('info-link').click();
                    }
                },
                flickr:'set:'+$(this).html(),
                flickrOptions: {
                    description: true,
                },
            });            
        });
    });
} (jQuery));
