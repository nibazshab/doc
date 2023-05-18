#!/bin/env bash

pnpm add -D vue vuepress@next @vuepress/client@next @vuepress/utils@next
pnpm add -D @vuepress/plugin-shiki@next
pnpm add -D vuepress-plugin-md-enhance

cd docs/content
mv index.md ..
for i in *.md; do f="${i%.*}"; mkdir "../$f"; mv "$i" "../$f/index.md"; done
