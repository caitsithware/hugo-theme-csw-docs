$(function() {
    var searchForm = $("form#searchBox");
    if( searchForm[0] ) {
        searchForm.attr("action",searchForm.attr("href"));
        searchForm.removeAttr("href");
    }

    var queryInput = $("#q");
    queryInput.val($.queryParameter("q"));
});