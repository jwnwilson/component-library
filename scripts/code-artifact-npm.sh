#! /bin/bash
DOMAIN="component-library"
REPO="component-library"
AWS_ACCOUNT="675468650888"

# Example: https://<my-domain>-<domain-owner-id>.d.codeartifact.<region>.amazonaws.com/pypi/<my-repo>/
# Note the lack of the "aws:auth-token@" part
export CODEARTIFACT_REPOSITORY_URL=`aws codeartifact get-repository-endpoint --domain ${DOMAIN} --domain-owner ${AWS_ACCOUNT} --repository ${REPO} --format pypi --query repositoryEndpoint --output text`

# This will give the token to access the repo
export CODEARTIFACT_AUTH_TOKEN=`aws codeartifact get-authorization-token --domain ${DOMAIN} --domain-owner ${AWS_ACCOUNT} --query authorizationToken --output text`

# This specifies the user who accesses the repo
export CODEARTIFACT_USER=aws

# Now use all of these when configuring the repo
npm set registry $CODEARTIFACT_REPOSITORY_URL
aws codeartifact login --tool npm --repository ${REPO} --domain ${DOMAIN} --domain-owner ${AWS_ACCOUNT} --region eu-west-1