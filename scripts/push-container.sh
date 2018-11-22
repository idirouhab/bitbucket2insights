#!/bin/sh

set -e

APP_NAME="bitbucket2insights"

BRANCH=$([ "${TRAVIS_BRANCH}" = "master" ] && echo "latest" || echo "${TRAVIS_BRANCH}")

if [ -n "${VERSION}" ]; then
  BRANCH=${VERSION}
fi

IMAGE_NAME=${DOCKER_REPOSITORY}/${APP_NAME}:${BRANCH}

echo "building ${IMAGE_NAME}..."
sudo docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
sudo docker build -t ${IMAGE_NAME} .
sudo docker push ${IMAGE_NAME}
