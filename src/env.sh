#!/usr/bin/env bash
pnpm add -D vue vuepress@next @vuepress/bundler-vite@next @vuepress/theme-default@next @vuepress/client@next @vuepress/utils@next
pnpm add -D @vuepress/plugin-shiki@next vuepress-plugin-comment2
d=$(pwd)/docs
f=$d/.vuepress/config.ts
cd $d/content
l=$(grep -n LANGS $f | grep -o ^[0-9]*)
for i in *.md
do
  grep -E '^`{3,}[a-zA-Z]{1,}' $i
done | tr -d '\r' | tr -d '`' | sort -u | while read i
do
  sed -i "$l i\'$i'," $f
done
c=$(grep -n CONTENTS $f | grep -o ^[0-9]*)
mv index.md $d
for i in pro link message
do
  mkdir $d/$i && mv $i.md $d/$i/index.md
done
find | while read i
do
  touch -d $(git log -1 --format=@%ct $i) $i
done
for i in $(ls -tr)
do
  i=$(basename $i .md)
  mkdir $d/$i && mv $i.md $d/$i/index.md
  sed -i "$c i\'/$i/'," $f
done
