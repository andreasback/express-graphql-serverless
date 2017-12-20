# express-graphql-serverless

This is an example of setting up a serverless GraphQL endpoint with AWS Api Gateway and Lambda using express-graphql and aws-serverless-express

This is deployed using either [AWS Cloudformation](https://aws.amazon.com/cli/) or [SAM Local](https://github.com/awslabs/aws-sam-local)

*You will need to provide a S3 bucket when packaging for deployment*

## Installing dependencies
`npm install`

### Testing locally
`sam local start-api`

you can now access your GraphQL API at http://127.0.0.1:3000/graphql

## Packaging for deployment
### AWS Cloudformation
`aws cloudformation package --template-file template.yaml --s3-bucket *your-s3-bucket* --output-template-file packaged.yaml`

### SAM Local
`sam package --template-file template.yaml --s3-bucket *your-s3-bucket* --output-template-file packaged.yaml`

## Deploying
### AWS Cloudformation
`aws cloudformation deploy --template-file ./packaged.yaml --stack-name express-graphql-serverless --capabilities CAPABILITY_IAM`

### SAM Local
`sam deploy --template-file ./packaged.yaml --stack-name express-graphql-serverless --capabilities CAPABILITY_IAM`
