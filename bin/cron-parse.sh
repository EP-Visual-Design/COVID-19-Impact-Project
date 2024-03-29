#!/bin/bash
cd ${0%/*}

# Get repo up to date with main
#
cd ..
git pull

bin/parse.sh

bin/pub-parsed-data.sh

bin/build.sh

bin/pub-html.sh

# Update repo with current date as commit message
#
git add *
xdate=`date "+%Y-%m-%d-%H:%M:%S"`
git commit -a -m  "cron pub $xdate"
git push 

# Update parsed-data 
#
cd ./parsed-data
git add *
git commit -a -m  "cron pub $xdate"
git push 
