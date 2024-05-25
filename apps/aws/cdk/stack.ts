import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { WebDeployment } from './constructs/web-deployment';
import { Config } from './config';

export class SkillSyncStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new WebDeployment(this, `${Config.appName}-web-deployment`);
  }
}
