#! /bin/bash

set -e
set -x

DOMAIN="component-library"
REPO="component-library"
AWS_ACCOUNT="675468650888"

VERSION_DATA=`aws codeartifact list-package-versions --package ${REPO} --domain ${DOMAIN} --domain-owner ${AWS_ACCOUNT} --repository ${REPO} --format npm --output json`
LATEST_VERSION=`echo $VERSION_DATA | jq -r ".defaultDisplayVersion"`
THIS_VERSION=`node -p "require('./package.json').version"`

PUBLISH_EMAIL="jwnwilson@hotmail.co.uk"
PUBLISH_NAME="CircleCI Job"

git config user.email "$PUBLISH_EMAIL"
git config user.name "$PUBLISH_NAME"

if [ "$LATEST_VERSION" != "$THIS_VERSION" ]; then
    echo "New version detected publishing library"
    npm publish
else
    npm version patch
    THIS_VERSION=`node -p "require('./package.json').version"`
    echo "Preparing for new release: $THIS_VERSION"
    echo $THIS_VERSION > VERSION
    source ./commit.sh
fi
