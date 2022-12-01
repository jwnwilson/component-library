#! /bin/bash

set -e
set -x

THIS_VERSION=`node -p "require('./package.json').version"`

git checkout main

git add .
git commit -m "Releasing new library: $THIS_VERSION"
git push origin main