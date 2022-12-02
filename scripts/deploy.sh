#! /bin/bash

set -e
set -x

DOMAIN="component-library"
REPO="component-library"
AWS_ACCOUNT="675468650888"

VERSION_DATA=`aws codeartifact list-package-versions --package ${REPO} --domain ${DOMAIN} --domain-owner ${AWS_ACCOUNT} --repository ${REPO} --format npm --output json --namespace jwnwilson`
LATEST_VERSION=`echo $VERSION_DATA | jq -r ".defaultDisplayVersion"`
THIS_VERSION=`node -p "require('./package.json').version"`
CODEARTIFACT_REPOSITORY_URL=`aws codeartifact get-repository-endpoint --domain ${DOMAIN} --domain-owner ${AWS_ACCOUNT} --repository ${REPO} --format npm --query repositoryEndpoint --output text`

PUBLISH_EMAIL="jwnwilson@hotmail.co.uk"
PUBLISH_NAME="CircleCI Job"

git config user.email "$PUBLISH_EMAIL"
git config user.name "$PUBLISH_NAME"

if [ "$LATEST_VERSION" != "$THIS_VERSION" ]; then
    echo "New version detected publishing library"
    npm publish --registry=${CODEARTIFACT_REPOSITORY_URL}
else
    npm version patch
    THIS_VERSION=`node -p "require('./package.json').version"`
    echo "Preparing for new release: $THIS_VERSION"
    echo $THIS_VERSION > VERSION
    source $(dirname "$0")/commit.sh
fi
