import path = require("path");

export class Config {
    static get envName(): string {
      return Config.fromEnvOrThrow('ENVIRONMENT')
    }

    static get appName(): string {
      return `skillsync-${Config.envName}`;
    }

    static get webBuildPath(): string {
      return path.join(__dirname, '../../web/build');
    }

    static get backendPath(): string {
      return path.join(__dirname, '../../backend');
    }

    static get backendPort(): number {
      return 3000;
    }

    private static fromEnvOrThrow(name: string): string {
      const value = process.env[name]
      if (!value) {
        throw new Error(`Missing required environment variable: ${name}`)
      }
      return value
    }
}
