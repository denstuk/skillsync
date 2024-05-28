import { Construct } from "constructs";
import { Config } from "../config";
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import { CfnOutput } from "aws-cdk-lib";

export class FargateService extends Construct {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      const vpc = new ec2.Vpc(this, `${Config.appName}-vpc`, {
        maxAzs: 3
      });

      const cluster = new ecs.Cluster(this, `${Config.appName}-cluster`, {
        vpc: vpc
      });

      const fargateService = new ecs_patterns.ApplicationLoadBalancedFargateService(this, `${Config.appName}-fargate`, {
        cluster: cluster,
        taskImageOptions: {
          image: ecs.ContainerImage.fromAsset(Config.backendPath),
          containerPort: Config.backendPort,
          containerName: Config.appName,
        },
        publicLoadBalancer: true
      });

      new CfnOutput(this, `${Config.appName}-load-balancer-url`, {
        value: fargateService.loadBalancer.loadBalancerDnsName
      });
    }
}
