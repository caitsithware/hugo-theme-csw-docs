$(function() {
    var externalLink = $('a[href^="http://"][target!="_blank"],a[href^="https://"][target!="_blank"]');
    if( externalLink[0] ) {
        externalLink.attr('target', '_blank');
        externalLink.attr('rel', 'noopener');
    }
});