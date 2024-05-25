#!/usr/bin/env node

import 'dotenv/config';
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SkillSyncStack } from './stack';
import { Config } from './config';

const app = new cdk.App();
new SkillSyncStack(app, Config.appName);

cdk.Tags.of(app).add('environment', Config.envName);
cdk.Tags.of(app).add('app', Config.appName);
