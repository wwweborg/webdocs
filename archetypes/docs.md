+++
date = '{{ .Date }}'
draft = {{ if eq .File.BaseFileName "_index" }}false{{ else }}true{{ end }}
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
weight = 10
+++

