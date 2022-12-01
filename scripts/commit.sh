#! /bin/bash

set -e
set -x

THIS_VERSION=`node -p "require('./package.json').version"`

mkdir ~/.ssh
touch ~/.ssh/known_hosts
ssh-keyscan github.com >> ~/.ssh/known_hosts

git checkout main

git add .
git commit -m "Releasing new library: $THIS_VERSION"
git push origin main