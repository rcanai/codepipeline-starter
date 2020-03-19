# codepipeline-starter

AWS Serverless Framework

## setup

```bash
$ yarn install;
```

# dev

```bash
$ export AWS_PROFILE=XXX;
$ yarn run dev \
  --pipelineName XXX;
```

## deploy

```bash
$ export AWS_PROFILE=XXX;
$ yarn run deploy \
  --serviceName cp-stater \
  --pipelineName XXX;
```