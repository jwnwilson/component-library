#! /bin/bash

set -e
set -x

PUBLISH_EMAIL="jwnwilson@hotmail.co.uk"
PUBLISH_NAME="CircleCI Job"
THIS_VERSION=`node -p "require('./package.json').version"`

git config user.email "$PUBLISH_EMAIL"
git config user.name "$PUBLISH_NAME"
git checkout main

git add .
git commit -m "Releasing new library: $THIS_VERSION"
git push origin main