// https://gist.github.com/Nully/1375966
(function($){
    var queries = (function(){
        var s = location.search.replace("?", ""),
            query = {},
            queries = s.split("&"),
            i = 0;
    
        if(!s) return null;
    
        for(i; i < queries.length && queries[i]; i ++) {
            var kv = queries[i].split("=");
            query[ decodeURIComponent(kv[0]) ] = decodeURIComponent(kv[1]);
        }
        return query;
    })();
  
      $.queryParameter = function(key) {
        return (queries == null ? null : queries[key] ? queries[key] : null);
      };
  })(jQuery);