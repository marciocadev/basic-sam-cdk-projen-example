import { Function, Runtime, Code } from '@aws-cdk/aws-lambda';
import { App, Construct, Stack, StackProps } from '@aws-cdk/core';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const lambda = new Function(this, 'basicLambda', {
      functionName: 'BasicLambda',
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset('src/lambda-fns/basic'),
      handler: 'index.handler',
    });

    console.log(lambda.functionName);
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'my-stack-dev', { env: devEnv });
// new MyStack(app, 'my-stack-prod', { env: prodEnv });

app.synth();