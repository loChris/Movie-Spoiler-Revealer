// create reveal spoiler button
const $button = $('<button>Reveal Spoiler</button>');
// append to web page
$('.spoiler').append($button);

// hide the spoiler text
$('.spoiler span').hide();
$('.spoiler button').click(() => {
    $('.spoiler span').show();
    $('.spoiler button').hide();
});