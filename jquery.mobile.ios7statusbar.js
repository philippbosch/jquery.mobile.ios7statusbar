(function($) {
    $(document).ready(function() {
        if (navigator.standalone) {
            $('body').addClass('standalone');
            if ($('meta[name="apple-mobile-web-app-status-bar-style"]').attr('content') == 'black-translucent') {
                $('body').addClass('translucent-statusbar');
           }
        }
    });
}(jQuery));
