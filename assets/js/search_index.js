var searchIndex = [
    {{ range $index, $page := .Site.Pages }}
    {{- if ne $page.Type "json" -}}
    {{- if and $index (gt $index 0) -}},{{- end }}
    {
        "uri": "{{ $page.Permalink }}",
        "title": "{{ htmlEscape $page.Title}}",
        "tags": [{{ range $tindex, $tag := $page.Params.tags }}{{ if $tindex }}, {{ end }}"{{ $tag| htmlEscape }}"{{ end }}],
        "description": "{{ htmlEscape .Description}}",
        "summary": {{.Summary | jsonify}},
        "content": {{$page.Plain | jsonify}}
    }
    {{- end -}}
    {{ end }}
];