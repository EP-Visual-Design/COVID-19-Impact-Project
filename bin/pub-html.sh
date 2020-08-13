#!/bin/bash
cd ${0%/*}

# Publish covid19 html app to epvisual.com

delete=--delete
test=
# test=--dry-run
verbose=
# verbose=v

host=epdev@epvisual.com
siteroot=/var/www/sites/epvisual.com
homepage=covid19-dashboard/a0
rpath="${siteroot}/${homepage}"

rdest=$host:${rpath}

ssh $host mkdir -p $rpath

# Remove server uploads directory, establish symbolic link later
ssh $host rm -rf $rpath/uploads

source=../client/build
echo $verbose $delete $test
echo "rsync from $source"
echo "        to $rdest"
rsync -razO$verbose --exclude .DS_Store --exclude .git --exclude uploads  $delete $test "$source/" "$rdest/"

# Symbolic link to express managed uploads
ssh $host ln -s /home/epdev/covid19/uploads $rpath/

echo
ssh $host ls -la $rpath/index.html
grep \"version\" ../client/package.json

echo
echo "open https://epvisual.com/${homepage}"
