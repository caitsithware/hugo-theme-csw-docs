$(function() {
    for(var level=1;level<=4;level++) {
        $("#main-content h"+level+"[id]").each(function() {
            var elem = $(this);
            var div = $("<div>")
            div.text(elem.text());
            var anchor = $("<a>");
            anchor.addClass("header-link");
            anchor.attr("href","#"+elem.attr("id"));
            anchor.attr("data-anchorjs-icon","#");
            div.append(anchor);
            elem.empty().append( div );
        });
    }
});