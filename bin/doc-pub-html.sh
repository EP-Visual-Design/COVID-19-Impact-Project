#!/bin/bash
cd ${0%/*}

# Publish covid19 html app to epvisual.com

delete=--delete
test=
# test=--dry-run
verbose=
verbose=v

host=epdev@epvisual.com
siteroot=/var/www/sites/epvisual.com
homepage=covid19-document
rpath="${siteroot}/${homepage}"

rdest=$host:${rpath}

ssh $host mkdir -p $rpath

source=../docus/build
echo $verbose $delete $test
echo "rsync from $source"
echo "        to $rdest"
rsync -razO$verbose --exclude .DS_Store --exclude .git  $delete $test "$source/" "$rdest/"

echo
ssh $host ls -la $rpath/index.html
grep \"version\" ../docus/package.json

echo
echo "open https://epvisual.com/${homepage}"
