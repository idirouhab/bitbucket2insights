# Bitbucket2Insights
[![Build Status](https://travis-ci.org/idirouhab/bitbucket2insights.svg?branch=master)](https://travis-ci.org/idirouhab/bitbucket2insights)

This repository is a simple middleware which gets [Bitbucket events payloads](https://confluence.atlassian.com/bitbucketserver/bitbucket-server-documentation-776639749.html) and sends it to [New Relic Insight as a custom event](https://docs.newrelic.com/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api).

## Requirements
This application is compatible with Bitbucket Server but not Cloud. Due to some divergences between both platforms Cloud is excluded.
You must have a New Relic account and have access to generate an [Insert Key](https://docs.newrelic.com/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api#register).

### Travis
Travis will push automatically the Docker image to Dockerhub.
If you decide to use your own registry, after forking the repository you may to add the following environment variables to Travis:

- `DOCKER_REPOSITORY`
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

## Documentation
This application is using Openapi 3.0 to make the documentation, feel free to use the [online edit](http://editor.swagger.io/) to see the [documentation](documentation.json).
Also, if you are running this application, you would be able to see the documentation under the root path (`YOUR_HOST:/`)

## How to make it running?
- Run `npm install`
- Check the [config file](./config/config.js) and make sure you either are using the static port or you set up PORT as an environment variable.
- Run `npm start`
- Send any [Bitbucket events payloads](https://confluence.atlassian.com/bitbucketserver/bitbucket-server-documentation-776639749.html)

## Contribute
Is there something missing?
You are more than welcome to contribute either opening an issue or making a pull request.

## Test
WIP