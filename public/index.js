$(document).ready(function() {

    function redirectToAiMarketing() {
        window.open('https://ai.marketing/en/campaign/igkmw5n14v', '_blank');
    }

    $('.button').on('click', function() {
        redirectToAiMarketing();
    })

    $('.cashback-shopping__item').on('click', function() {
        redirectToAiMarketing();
    })

    $('.play-button').on('click', function(e) {
        $('.landing-jumbo__video-bg').css({'display':'none'});
    })
})