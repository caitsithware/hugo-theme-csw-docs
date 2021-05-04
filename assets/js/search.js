$(function() {
    var query = $.queryParameter("q");

    if( query == null || query === "" ) {
        return;
    }
     
    var lunrIndex = new lunr(function() {
        {{ if (ne .Site.Language.Lang "en") }}
        this.use(lunr.{{ .Site.Language }});
        {{ end }}
        this.ref("uri");
        this.field('title', {
            boost: 15
        });
        this.field("description", {
            boost: 10
        });
        this.field("content", {
            boost: 5
        });

        var that = this;

        // Feed lunr with each file and let lunr actually index them
        searchIndex.forEach(function(page) {
            that.add(page);
        });

        this.pipeline.remove(this.stemmer)
    });

    var results = lunrIndex.search(query).map(function(result) {
        return searchIndex.filter(function(page) {
            return page.uri === result.ref;
        })[0];
    });

    var resultLength = results.length;
    if( results.length > 0) {
        var html = '';
        html += '<h2>'+`{{ i18n "Search-matches" }}`+'</h2>';

        for(i in results) {
            var result = results[i];
            html += '<div class="result">';
            html += '<a href=".' + result.uri + '" class="title">' + result.title + '</a>';
            var description = (result.description.length > 130)? result.description.slice(0,127) + '...' : result.description;
            if(!description) {
                description = (result.summary.length > 130)? result.summary.slice(0,127) + '...' : result.summary;
            }
            html += '<p>' + description + '</p></div>';
        }

        $('#search-results').html(html);
    } else {
        $('#search-results').html(`{{ i18n "Search-not-matches" }}`);
    }
    $('.search-spinner').css("display","none");
});