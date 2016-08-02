    //Collapse navigation on click (Bootstrap 3 is missing it)
    jQuery('.nav a').on('click', function() {
        jQuery('#my-nav').removeClass('in').addClass('collapse');
    });